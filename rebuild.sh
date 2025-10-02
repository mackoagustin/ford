#!/bin/bash

# Script para rebuild completo sin cache del proyecto Ford

echo "🧹 Limpiando contenedores y volúmenes..."
docker-compose down -v

echo ""
echo "🗑️  Eliminando imágenes antiguas..."
docker rmi ford-backend-dev 2>/dev/null || true
docker images | grep ford | awk '{print $3}' | xargs docker rmi -f 2>/dev/null || true

echo ""
echo "🔧 Limpiando cache de build..."
docker builder prune -af

echo ""
echo "🏗️  Rebuilding desde cero (sin cache)..."
docker-compose build --no-cache --pull

echo ""
echo "✅ Build completado. Iniciando servicios..."
docker-compose up

