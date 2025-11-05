
# 🛒 Ecommerce API + Stripe (modo test) – Jesús Manuel Valverde Pérez

##  Descripción General

Proyecto **Full Stack** desarrollado como parte del **Examen Técnico – Desarrollador Junior**.  
Este sistema **Ecommerce** consume la **API pública de Syscom**, mostrando categorías, productos y accesorios.  
Permite realizar compras de prueba mediante **Stripe (modo test)** y envía **correos de confirmación** con **Nodemailer**.

> 💡 El objetivo es demostrar habilidades en desarrollo frontend, backend, integración de APIs externas, y manejo de servicios como Stripe y correo electrónico.

---


## Instalación

  

1. Clonar el repo y moverse a la carpeta frontend y tambien a la de backend (puedes usar dos terminales).

```bash

git  clone  https://github.com/Jesus-Valverde/ecommerce-api-stripe-junior-jesus-valverde.git

cd  frontend
cd  backend

```

  

2. Instalar dependencias dentro de las dos carpetas

```

npm install

```

  

---

  

## Scripts

  

- Iniciar servidor en modo desarrollo, esto en las dos terminales

```

npm run dev

```

  

- Ejecutar tests (si los agregas)

```

npm test

```

El proyecto correrá en [http://localhost:3000](http://localhost:3000).

---

## Variables de Entorno

  

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | URL base de la API de productos | `http://localhost:4000` |
| `STRIPE_SECRET_KEY` | Clave secreta de Stripe para modo test | `sk_test_XXXX` |
| `STRIPE_PUBLIC_KEY` | Clave pública de Stripe | `pk_test_XXXX` |
| `EMAIL_USER` | Usuario de correo de prueba (Ethereal/Mailtrap) | `user@example.com` |
| `EMAIL_PASS` | Contraseña del correo de prueba | `password123` |
| `WEBHOOK_SECRET` | Clave secreta para validar webhooks de Stripe | `whsec_XXXX` |

 
> Asegúrate de no subir tu `.env.local` a repositorios públicos.

---

## Limitaciones y Posibles Mejoras

  

-  **Limitaciones actuales:**

- La API de productos requiere texto de búsqueda obligatorio (`"camara"` por defecto).

- Los filtros de página y per_page no funcionan en la API actual.

- Integración de carrito y stock limitada a pruebas locales.

  

-  **Posibles mejoras:**

- Soporte completo para paginación y filtros avanzados.

- Manejo de stock en tiempo real y actualización de cantidades.

- Integración de autenticación de usuarios y roles.

- Implementación de tests unitarios y de integración.

- Mejoras en la UI/UX del checkout y búsqueda de productos.

---

##  Autor

**Jesús Manuel Valverde Pérez**  
📧 jesusvalverde.dev@gmail.com  
💼 [GitHub](https://github.com/Jesus-Valverde) | [LinkedIn](https://www.linkedin.com/in/jes-val/)