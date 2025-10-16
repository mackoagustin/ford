#!/usr/bin/env node

/**
 * Script para optimizar todas las imágenes PNG y JPEG en /public/img/
 * Mantiene excelente calidad visual pero reduce significativamente el peso
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';

const IMAGE_DIR = './public/img';
const QUALITY = 65; // Calidad para JPEG (65 = buen balance, mucho más liviano)
const PNG_QUALITY = 70; // Calidad para PNG

let totalOriginalSize = 0;
let totalOptimizedSize = 0;
let filesProcessed = 0;

/**
 * Optimiza una imagen individual
 */
async function optimizeImage(filePath) {
  try {
    const stats = await stat(filePath);
    const originalSize = stats.size;
    
    const isJPEG = /\.(jpg|jpeg)$/i.test(filePath);
    const isPNG = /\.png$/i.test(filePath);
    
    if (!isJPEG && !isPNG) {
      return; // Ignorar otros formatos
    }
    
    // Crear backup temporal
    const image = sharp(filePath);
    
    if (isJPEG) {
      await image
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(filePath + '.tmp');
    } else if (isPNG) {
      await image
        .png({ quality: PNG_QUALITY, compressionLevel: 9 })
        .toFile(filePath + '.tmp');
    }
    
    // Verificar el tamaño del archivo optimizado
    const tmpStats = await stat(filePath + '.tmp');
    const optimizedSize = tmpStats.size;
    
    // Solo reemplazar si el archivo optimizado es más pequeño
    if (optimizedSize < originalSize) {
      const { rename, unlink } = await import('fs/promises');
      await unlink(filePath);
      await rename(filePath + '.tmp', filePath);
      
      const saved = originalSize - optimizedSize;
      const savedPercent = ((saved / originalSize) * 100).toFixed(1);
      
      console.log(`✓ ${filePath.replace('./public/img/', '')}: ${formatSize(originalSize)} → ${formatSize(optimizedSize)} (${savedPercent}% reducido)`);
      
      totalOriginalSize += originalSize;
      totalOptimizedSize += optimizedSize;
      filesProcessed++;
    } else {
      // Si no es más pequeño, eliminar el temporal y mantener el original
      const { unlink } = await import('fs/promises');
      await unlink(filePath + '.tmp');
      console.log(`⊘ ${filePath.replace('./public/img/', '')}: ya está optimizado`);
    }
    
  } catch (error) {
    console.error(`✗ Error optimizando ${filePath}:`, error.message);
  }
}

/**
 * Recorre recursivamente un directorio
 */
async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      await optimizeImage(fullPath);
    }
  }
}

/**
 * Formatea bytes a un formato legible
 */
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

/**
 * Función principal
 */
async function main() {
  console.log('🖼️  Optimizando imágenes...\n');
  console.log(`📁 Directorio: ${IMAGE_DIR}`);
  console.log(`🎯 Calidad JPEG: ${QUALITY}%`);
  console.log(`🎯 Calidad PNG: ${PNG_QUALITY}%\n`);
  
  const startTime = Date.now();
  
  await processDirectory(IMAGE_DIR);
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log('\n' + '='.repeat(60));
  console.log(`✅ Optimización completada en ${duration}s`);
  console.log(`📊 Archivos procesados: ${filesProcessed}`);
  
  if (filesProcessed > 0) {
    const totalSaved = totalOriginalSize - totalOptimizedSize;
    const totalSavedPercent = ((totalSaved / totalOriginalSize) * 100).toFixed(1);
    
    console.log(`💾 Tamaño original: ${formatSize(totalOriginalSize)}`);
    console.log(`💾 Tamaño optimizado: ${formatSize(totalOptimizedSize)}`);
    console.log(`🎉 Espacio ahorrado: ${formatSize(totalSaved)} (${totalSavedPercent}%)`);
  }
  console.log('='.repeat(60));
}

main().catch(console.error);

