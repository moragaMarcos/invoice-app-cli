# Sistema de Gestión de Facturas
# React + TypeScript + Vite

Este proyecto permite gestionar facturas y notas de crédito de forma sencilla, cargando datos desde un archivo JSON y manipulándolos mediante una API REST (.NET) y una interfaz web (React).

---

## Credenciales
- Email: moraga@finix-group.cl
- Contraseña: finixgroup@2025
  
## Tecnologías

- Backend: .NET 8 + Entity Framework Core + SQLite
- Frontend: React + TailwindCSS@4
- Base de datos: SQLite
- Autenticación: JWT 

### Requisitos: Tener backend en ejecución

Iniciar backend https://github.com/moragaMarcos/invoice-app-bk

## Instalación y Ejecución

1. Clonar repositorio
2. Ir a la carpeta `/frontend`
3. Instalar dependencias

   ```bash
     npm i
   ```
4. Ejecutar aplicación
   
   ```bash
     npm start
   ```
5. Acceder a : http://localhost:5173

## Patrones de Diseño Aplicados

- **Presentational & Container Components**: separación de lógica y presentación.
