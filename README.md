
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
| `API_BASE_URL` | Nuestra dirección de la API pública de SYSCOM | `https://syscom-api-xj2nzjxykq-uc.a.run.app` |
| `PORT` | Nuestro puerto local desde el cual abriremos nuestro servidor | `4000` |
| `PUBLIC_URL` | Nuestra dirección base del backend a la cual apuntaremos para acceder a nuestros endpoints | `http://localhost:4000` |
| `STRIPE_SECRET_KEY` | Nuestra clave secreta privada para inicializar el SDK de Stripe y crear sesiones de pago | `sk_test_XXXX` |
| `STRIPE_WEBHOOK_SECRET` | Clave de seguridad usada para verificar que los eventos del webhook de Stripe son válidos | `pk_test_XXXX` |
| `MAIL_HOST` | Servidor SMTP para enviar correos | `smtp.ethereal.email` |
| `MAIL_PORT` | Puerto del servidor SMTP  | `587` |
| `MAIL_USER` | Usuario o email asignado por el servicio SMTP  | `your_user` |
| `EMAIL_PASS` | Contraseña del servicio SMTP | `password123` |
| `FROM_EMAIL` | Nombre y correo con el que se enviarán los emails al cliente | `Tienda Demo <no-reply@demo.test>` |
| `DEV_MOCK` | Permite activar modo “mock” (falso) para desarrollo si la API externa falla (true o false). | `false` |

 
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