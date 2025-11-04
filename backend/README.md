# Backend – Ecommerce API + Stripe (modo test)

## Descripción
Servidor backend en **Node.js + Express** que:
- Provee endpoints internos `/internal/...` para el frontend.

---

## Instalación

1. Clonar el repo y moverse a la carpeta backend
```bash
git clone https://github.com/Jesus-Valverde/ecommerce-api-stripe-junior-jesus-valverde.git
cd backend
```

2.  Instalar dependencias
```
npm install
```

4.  Crear archivo `.env` basado en `.env.example`
```
cp .env.example .env
```

Rellenar las variables con tus credenciales de Stripe y correo.

---

## Scripts

-   Iniciar servidor en modo desarrollo
    
```
npm run dev 
```

-   Ejecutar tests (si los agregas)
    
```
npm test
```

---

----------

## Endpoints principales

| Ruta | Método | Descripción |
|--|--|--|
| /api/categories | GET | Obtener todas las categorías |
| /api/categories/:id | GET | Obtener una categoría por ID |
| /api/brands | GET | Obtener todas las marcas |
| /api/brands/:id | GET | Obtener una marca por ID |
| /api/brands/:id/products | GET | Obtener productos por marca |
| /api/products/search | GET | Buscar productos |
| /api/products/:sku | GET | Obtener producto por SKU |
| /api/products/:sku/related | GET | Obtener productos relacionados |
| /api/products/:sku/accessories | GET | Obtener accesorios de un producto |

----------

## Variables de entorno
Este archivo define las configuraciones necesarias para ejecutar el backend correctamente.  
Cada variable debe copiarse a un archivo `.env` en la raíz del backend antes de iniciar el servidor.
Ver `.env.example` para referencia y explicación de cada variable.  
‼️Advertencia: No subir `.env` a tu repositorio ‼️

---

## Autor

**Jesús Manuel Valverde Pérez**

📧 jesusvalverde.dev@gmail.com

💼 [GitHub](https://github.com/Jesus-Valverde) | [LinkedIn](https://www.linkedin.com/in/jes-val/)