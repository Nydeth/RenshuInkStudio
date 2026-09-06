# 🐉 RenshuInkStudio

> **Trabajo de Fin de Grado (TFG) - Desarrollo de Aplicaciones Web (DAW)**  
> Plataforma web integral para la gestión, catálogo y servicios de un estudio de tatuajes, bisutería e ilustración.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Completed-success.svg)
![Backend](https://img.shields.io/badge/.NET-8.0-512BD4?logo=dotnet)
![Frontend](https://img.shields.io/badge/React-18-61DAFB?logo=react)

---

## 📌 Descripción del Proyecto

**RenshuInkStudio** es una solución web fullstack diseñada como proyecto de fin de grado. La aplicación ofrece una plataforma centralizada tanto para clientes como para profesionales del estudio, permitiendo la exploración de contenido visual, la gestión de inventario y la tramitación de solicitudes de citas y productos.

El desarrollo combina una API REST robusta construida sobre la plataforma .NET con una interfaz dinámicamente reactiva orientada a la experiencia de usuario (*Mobile-First*).

---

## ✨ Características Principales

- 👥 **Gestión de Recursos (CRUD API):** Endpoints dedicados para administrar tatuadores, perfiles de clientes, galerías de imágenes, catálogo de bisutería y publicaciones.
- 🔐 **Autenticación & Seguridad:** Control de acceso mediante tokens JWT (JSON Web Tokens).
- - 📧 **Notificaciones & Email:** Servicio automatizado de envío de correo electrónico para la gestión de solicitudes, avisos y boletines.
- 📱 **Diseño Responsive:** Interfaz adaptativa construida con un enfoque *mobile-first* y componentes modulares.
- 🤖 **Uso de IA en el Desarrollo:** Apoyo en la generación de recursos visuales e ingeniería de prompts, así como asistencia en el análisis y optimización de código complejo.

---

## 🛠️ Stack Tecnológico

### Backend
- **Lenguaje:** C# (.NET 8.0)
- **Framework:** ASP.NET Core Web API
- **ORM & Base de Datos:** Entity Framework Core (Soporte para SQL Server y MySQL via Pomelo)
- **Documentación API:** Swagger / Swashbuckle
- **Seguridad:** JWT Bearer Authentication

### Frontend
- **Librería & Tooling:** React + Vite
- **Lenguajes:** JavaScript (ES6+), HTML5, SCSS / CSS3
- **Framework UI:** Bootstrap

---

## 👥 Reparto de Tareas & Equipo

- **Backend:** Andrés Hernández Ordóñez
- **Frontend:** Ángel de la Rosa López
- **Diseño:** Jorge Hidalgo Sánchez

---

## 🚀 Instalación y Despliegue Local

### Prerrequisitos
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18+)
- Instancia de SQL Server o MySQL

### 1. Backend (API)
```bash
# Clonar el repositorio
git clone https://github.com/Nydeth/RenshuInkStudio.git

# Ir al directorio del backend
cd RenshuInkStudio/backend

# Restaurar paquetes NuGet
dotnet restore

# Ejecutar la API
dotnet run
```

### 2. Frontend (React)
```bash
# Ir al directorio del frontend
cd ../frontend

# Iniciar el servidor de desarrollo
npm run dev
```
