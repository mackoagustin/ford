#!/bin/bash

# Script para probar el backend de Ford

echo "🧪 Probando Backend Ford..."
echo ""

# Verificar que el backend esté corriendo
echo "1️⃣ Verificando health check..."
curl -s http://localhost:3001/api/health | jq '.' || echo "❌ Backend no responde"
echo ""
echo ""

# Probar envío de formulario
echo "2️⃣ Probando envío de formulario..."
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan Pérez Test",
    "email": "juan.test@example.com",
    "telefono": "1122334455",
    "provincia": "Buenos Aires",
    "mensaje": "Esta es una prueba del sistema de envío de emails desde Docker",
    "origen": "WEB AUTOSPECIAL",
    "suborigen": "Prueba Docker Backend"
  }' | jq '.'

echo ""
echo "✅ Pruebas completadas"
echo ""
echo "Para ver los logs del backend:"
echo "  docker-compose logs -f backend"

