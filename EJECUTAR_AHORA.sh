#!/bin/bash

# Script para ejecutar el proyecto Ford completo con Docker

echo "🚀 Iniciando Proyecto Ford"
echo "=========================="
echo ""

# Verificar que existe el .env
if [ ! -f "backend/.env" ]; then
    echo "⚠️  No existe backend/.env"
    echo ""
    echo "Creando archivo de ejemplo..."
    cat > backend/.env << 'EOF'
SMTP_USER=tu_email@gmail.com
SMTP_PASS=xxxx_xxxx_xxxx_xxxx
PORT=3001
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
EOF
    echo ""
    echo "✅ Archivo creado en: backend/.env"
    echo ""
    echo "⚠️  IMPORTANTE: Edita backend/.env con tus credenciales reales:"
    echo "   nano backend/.env"
    echo ""
    echo "Luego ejecuta nuevamente: ./EJECUTAR_AHORA.sh"
    exit 1
fi

echo "✅ Archivo backend/.env encontrado"
echo ""

# Verificar Docker
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker no está corriendo"
    echo "   Inicia Docker Desktop y vuelve a ejecutar este script"
    exit 1
fi

echo "✅ Docker está corriendo"
echo ""

# Preguntar si hacer build limpio
echo "¿Quieres hacer un build limpio? (s/n)"
read -r respuesta

if [ "$respuesta" = "s" ] || [ "$respuesta" = "S" ]; then
    echo ""
    echo "🧹 Haciendo build limpio..."
    docker-compose down -v
    docker-compose build --no-cache --pull
else
    echo ""
    echo "🏗️  Build normal..."
    docker-compose build
fi

echo ""
echo "🚀 Iniciando servicios..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "URLs disponibles:"
echo "  Frontend: http://localhost:5173"
echo "  Backend:  http://localhost:3001"
echo ""
echo "Para detener: Ctrl+C luego 'docker-compose down'"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

docker-compose up

