# Cambios Realizados - Formato ADF con Origen y Suborigenes

## 📧 Resumen de Cambios

Se actualizó el sistema de envío de emails para incluir correctamente los campos **ORIGEN** y **SUBORIGEN** en el formato ADF XML, según las especificaciones de Tecnom.

---

## 🔧 Archivos Modificados

### **Backend**

#### 1. `/backend/utils/adfFormatter.js`
**Cambios:**
- ✅ Eliminados todos los textos explicativos del XML
- ✅ Limpiado formato ADF para que sea un XML estándar válido
- ✅ Agregado campo `origen` con valor por defecto: **"WEB AUTOSPECIAL"**
- ✅ Agregado campo `suborigen` con valor por defecto: **"General"**
- ✅ La sección `<provider>` ahora es:
```xml
<provider>
<name>WEB AUTOSPECIAL</name>
<service>Test Drive</service>
</provider>
```

#### 2. `/backend/services/emailToTecnomService.js`
- ✅ Sin cambios - ya estaba correctamente configurado
- ✅ Destino: `wc+autospecial_web@tecnom.cloud`

---

### **Frontend**

#### 3. `/src/hooks/useFormSubmit.js`
**Cambios:**
- ✅ Agregado envío de campos `origen` y `suborigen` en todos los formularios
- ✅ Agregado envío de campos opcionales `vehiculo` y `sucursal`
- ✅ Valores por defecto si no se especifican:
  - `origen`: "WEB AUTOSPECIAL"
  - `suborigen`: "General"

#### 4. Componentes de Formularios

**`/src/components/Form/Form.jsx`**
- ✅ Acepta props `origen` y `suborigen`
- ✅ Valores por defecto: origen="WEB AUTOSPECIAL", suborigen="Formulario General"

**`/src/components/FormParts/FormParts.jsx`**
- ✅ Acepta props `origen` y `suborigen`
- ✅ Valores por defecto: origen="WEB AUTOSPECIAL", suborigen="Formulario Repuestos"
- ✅ Mapea el campo `location` (sucursal) a `sucursal` en el envío

**`/src/components/FormPdf/FormPdf.jsx`**
- ✅ Acepta props `origen` y `suborigen`
- ✅ Valores por defecto: origen="WEB AUTOSPECIAL", suborigen="Formulario PDF"

---

## 📍 Suborigenes por Página

Se configuraron suborigenes específicos para cada página del sitio:

| **Página** | **Ruta** | **Suborigen** |
|-----------|----------|---------------|
| Test Drive | `/vehiculos/test-drive` | "Test Drive" |
| Vehículos | `/vehiculos` | "Vehículos - Asesoramiento" |
| Repuestos | `/postventa/repuestos` | "Repuestos" |
| Solicitar Turno | `/postventa/solicitar-turno` | "Solicitar Turno" |
| Talleres | `/postventa/talleres` | "Talleres" |
| Accesorios | `/postventa/accesorios` | "Accesorios" |
| Ford Protect | `/postventa/ford-protect` | "Ford Protect" |
| Ford Credit | `/financiacion/ford-credit` | "Ford Credit" |
| Plan Óvalo | `/financiacion/plan-ovalo` | "Plan Óvalo" |
| Actos Adjudicación | `/financiacion/plan-ovalo/actos-de-adjudicacion` | "Plan Óvalo - Actos Adjudicación" |
| Resultados Actos | `/financiacion/plan-ovalo/resultados-actos-de-adjudicacion` | "Plan Óvalo - Resultados Actos" |
| Sucursales | `/sucursales` | "Sucursales" |
| Ford Pro | `/ford-pro` | "Ford Pro" |
| Sumate al Equipo | `/quienes-somos/sumate` | "Sumate al Equipo - RR.HH." |

---

## 📄 Ejemplo de XML ADF Generado

```xml
<?ADF VERSION "1.0"?>
<?XML VERSION "1.0"?>
<adf>
<prospect>
<requestdate>2024-10-01T14:30:00-03:00</requestdate>
<vehicle>
<year></year>
<make>Ford</make>
<model></model>
<comments></comments>
</vehicle>
<customer>
<contact>
<name part="first" type="individual">Juan</name>
<name part="last" type="individual">Pérez</name>
<email preferredcontact="1">juan@email.com</email>
<phone type="phone">1122334455</phone>
<phone type="cellphone">1122334455</phone>
<identification></identification>
<address type="home">
<city>Buenos Aires</city>
</address>
</contact>
<comments>Necesito información sobre financiación</comments>
</customer>
<vendor>
<vendorname>Auto Special Palermo</vendorname>
</vendor>
<provider>
<name>WEB AUTOSPECIAL</name>
<service>Ford Credit</service>
</provider>
</prospect>
</adf>
```

---

## ✅ Validación

### **Formato correcto según Tecnom:**
- ✅ Email destino: `wc+autospecial_web@tecnom.cloud`
- ✅ Origen en `<provider><name>`: **WEB AUTOSPECIAL**
- ✅ Suborigen en `<provider><service>`: Según la página
- ✅ Sin textos explicativos en el XML
- ✅ Formato limpio y válido

---

## 🚀 Próximos Pasos

1. Probar el envío de formularios desde diferentes páginas
2. Verificar que en Tecnom se reciban correctamente con los suborigenes específicos
3. Ajustar suborigenes si es necesario según feedback de Tecnom

---

## 📝 Notas

- Todos los formularios ahora envían automáticamente `origen` y `suborigen`
- Si no se especifica un suborigen en una página, se usa "General" por defecto
- El campo `sucursal` se envía automáticamente cuando se selecciona en formularios de repuestos

