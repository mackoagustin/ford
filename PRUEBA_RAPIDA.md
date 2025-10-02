# 🧪 Prueba Rápida del Sistema Ford

## ✅ Verificar que Todo Está Corriendo

```bash
docker ps
```

Deberías ver:
- `ford-frontend-dev` en puerto 5173
- `ford-backend-dev` en puerto 3001

---

## 🌐 Paso 1: Abrir el Frontend

Abre tu navegador en: **http://localhost:5173**

---

## 📝 Paso 2: Ir a un Formulario

Navega a cualquiera de estas páginas:

1. **Test Drive:** http://localhost:5173/vehiculos/test-drive
2. **Repuestos:** http://localhost:5173/postventa/repuestos  
3. **Ford Credit:** http://localhost:5173/financiacion/ford-credit
4. **Plan Óvalo:** http://localhost:5173/financiacion/plan-ovalo

---

## ✍️ Paso 3: Completar el Formulario

**Datos de ejemplo:**
- Nombre: `Juan Pérez`
- Email: `test@example.com`
- Teléfono: `1122334455`
- Provincia: `Buenos Aires`
- Mensaje: `Necesito información sobre este vehículo`

---

## 🚀 Paso 4: Enviar

Click en **"Enviar consulta"**

El botón cambiará:
1. 🔄 "Enviando consulta..." (con spinner)
2. ✅ "Enviada" (con check verde) o ❌ Error

---

## 📊 Paso 5: Ver los Logs

**En otra terminal**, ejecuta:

```bash
docker-compose logs -f backend
```

### Qué vas a ver:

**✅ Lo que DEBE funcionar:**

```
📧 Recibiendo formulario: {
  nombre: 'Juan Pérez',
  email: 'test@example.com',
  telefono: '1122334455',
  provincia: 'Buenos Aires',
  mensaje: 'Necesito información sobre este vehículo',
  origen: 'WEB AUTOSPECIAL',
  suborigen: 'Test Drive'
}
✅ Configuración SMTP verificada
📝 Formateando datos a ADF XML...
📧 Enviando email ADF XML a Tecnom...
📤 Destinatario: wc+autospecial_web@tecnom.cloud
📄 Contenido ADF XML:
<?ADF VERSION "1.0"?>
<?XML VERSION "1.0"?>
<adf>
<prospect>
<requestdate>2024-10-01T14:30:00-03:00</requestdate>
<vehicle interest="buy" status="new">
<year></year>
<make>Ford</make>
<model></model>
<vin></vin>
<stock></stock>
<comments>Necesito información sobre este vehículo</comments>
</vehicle>
<customer>
<contact>
<name part="first" type="individual">Juan</name>
<name part="last" type="individual">Pérez</name>
<email preferredcontact="1">test@example.com</email>
<phone type="voice" time="nopreference">1122334455</phone>
<address type="home">
<city>Buenos Aires</city>
<regioncode>Buenos Aires</regioncode>
<postalcode></postalcode>
<country>AR</country>
</address>
</contact>
<comments>Necesito información sobre este vehículo</comments>
</customer>
<vendor>
<vendorname>Auto Special</vendorname>
</vendor>
<provider>
<name>WEB AUTOSPECIAL</name>
<service>Test Drive</service>
</provider>
</prospect>
</adf>
```

**❌ Error esperado (por credenciales de ejemplo):**

```
❌ Error al enviar email a Tecnom: Error: Invalid login: 535-5.7.8 Username and Password not accepted
```

---

## ✅ Checklist de Verificación

- [ ] Frontend carga correctamente
- [ ] Formulario se puede completar
- [ ] Al enviar, el botón cambia a "Enviando..." y luego a "Enviada"
- [ ] En los logs se ve el XML ADF completo
- [ ] El XML contiene: origen="WEB AUTOSPECIAL" y suborigen según la página
- [ ] El formato XML es válido (con todas las etiquetas correctas)

---

## 🔧 Si Todo Funciona Hasta Aquí...

**El sistema está OK**. Solo falta configurar las credenciales SMTP reales:

### Configurar Email Real:

1. Editar `.env`:
```bash
nano .env
```

2. Poner tus credenciales de Gmail:
```env
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_password_aplicacion_16_caracteres
```

3. Reiniciar backend:
```bash
docker-compose restart backend
```

4. Probar de nuevo y el email se enviará a: `wc+autospecial_web@tecnom.cloud`

---

## 🎯 Pruebas Adicionales

### Probar diferentes suborigenes:

1. Test Drive → "Test Drive"
2. Repuestos → "Repuestos"
3. Ford Credit → "Ford Credit"
4. Talleres → "Talleres"

Cada uno debe generar un suborigen diferente en el XML.

---

## 🐛 Troubleshooting

### Frontend no carga:
```bash
docker-compose logs frontend
```

### Backend no responde:
```bash
curl http://localhost:3001/api/health
docker-compose logs backend
```

### Reiniciar todo:
```bash
docker-compose restart
```

---

## 📞 Comandos Útiles

```bash
# Ver contenedores
docker ps

# Ver logs en tiempo real
docker-compose logs -f

# Solo backend
docker-compose logs -f backend

# Reiniciar un servicio
docker-compose restart backend

# Detener todo
docker-compose down

# Iniciar todo
docker-compose up -d
```

