<p align="center">
  <img width="400" src="https://es.fictionexpress.com/static/images/logo/fiction-express.svg" alt="Fiction Express Logo">
</p>

# Fiction Express Reader API - Test Técnico (Backend)

## Descripción del Proyecto

Este proyecto representa la implementación del backend para el test técnico de Fiction Express Reader, utilizando NestJS para crear una API RESTful que simula las funcionalidades básicas de una plataforma de lectura digital.

## ¿Por qué NestJS?

NestJS fue elegido por su arquitectura modular y su excelente integración con TypeScript, ofreciendo varias ventajas:

1. **Estructura Organizada**: NestJS promueve una estructura de proyecto clara y modular, facilitando el mantenimiento y la escalabilidad.
2. **Decoradores Poderosos**: Simplifica la creación de controladores, servicios y middleware.
3. **Inyección de Dependencias**: Facilita la gestión de dependencias y mejora la testeabilidad del código.
4. **Integración con Otras Tecnologías**: Fácil integración con ORMs, servicios de autenticación, y otras bibliotecas.
5. **Documentación Automática**: Generación sencilla de documentación API con Swagger.

Para este test, NestJS nos permite demostrar rápidamente buenas prácticas de desarrollo backend en un framework moderno y robusto.

## Tecnologías y Características Principales

### Recursos Implementados

1. **Books Resource**
   - `GET /books`: Lista de libros disponibles
   - `GET /books/:id`: Detalles de un libro específico

2. **Auth Resource**
   - `POST /auth/login`: Autenticación de usuarios

3. **Health Resource**
   - `GET /health`: Health check de la API

### Autenticación y Seguridad

- **JWT (JSON Web Tokens)**: 
  - El endpoint `/auth/login` retorna un access token generado con JWT.
  - Cada request subsiguiente requiere este token en el header de autorización.
  - Los tokens tienen un tiempo de expiración configurable.

- **Custom Auth Decorator**: 
  - Implementado para validar fácilmente la autenticación en rutas protegidas.

- **Role-Based Access Control**: 
  - Sistema de control de acceso basado en roles para demostrar manejo de permisos.

### Documentación con Swagger

Se ha implementado una documentación básica utilizando Swagger, accesible en la ruta `/api/v1` cuando se ejecuta en modo de desarrollo. Esto proporciona una interfaz interactiva para explorar y probar los endpoints de la API.

## Estructura del Proyecto

```
src/
├── auth/
│   ├── decorators/
│   ├── dto/
│   ├── guards/
│   ├── strategies/
│   ├── auth.controller.ts
│   └── auth.service.ts
├── books/
│   ├── dto/
│   ├── entities/
│   ├── books.controller.ts
│   └── books.service.ts
├── health/
│   └── health.controller.ts
├── common/
│   ├── decorators/
│   └── guards/
├── config/
├── app.module.ts
└── main.ts
```

## Configuración y Ejecución Local

1. Clona el repositorio:
   ```
   git clone [URL_DEL_REPOSITORIO]
   ```

2. Navega al directorio del proyecto:
   ```
   cd fiction-express-api-test
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

4. Copia `.env.example` a `.env` y configura las variables necesarias:
   ```
   JWT_SECRET=this_is_my_jwt_secret
    NEXTAUTH_SECRET=this_is_my_nextauth_secret
   ```

5. Inicia el servidor de desarrollo:
   ```
   npm run start:dev
   ```

6. La API estará disponible en `http://localhost:3002/api/v1`
7. Accede a la documentación Swagger en `http://localhost:3002/api/v1`

## Endpoints Principales

- `GET /api/v1/books`: Obtiene la lista de libros
- `GET /api/v1/books/:id`: Obtiene detalles de un libro específico
- `POST /api/v1/auth/login`: Autenticación de usuario (retorna JWT token)
- `GET /api/v1/health`: Health check de la API

## Flujo de Autenticación

1. El usuario hace una petición POST a `/auth/login` con sus credenciales.
2. Si las credenciales son válidas, el servidor retorna un JWT.
3. Para acceder a rutas protegidas, el cliente debe incluir este token en el header de Authorization de sus requests.
4. El servidor valida el token en cada request a rutas protegidas.
5. Si el token es válido y no ha expirado, se permite el acceso. En caso contrario, se rechaza la petición.

## Notas Adicionales

- Este proyecto es un test técnico y no una API en producción.
- Los datos de libros y usuarios se manejan en memoria para este test.
- Se han implementado validaciones básicas y manejo de errores.

## Áreas de Mejora (en un escenario real)

- Implementación de tests unitarios y de integración
- Conexión con una base de datos real
- Implementación de logging avanzado y monitoreo
- Configuración de CI/CD para despliegue automatizado

---

Este proyecto de test técnico demuestra habilidades en desarrollo backend con NestJS, incluyendo implementación de API RESTful, autenticación JWT, y arquitectura modular de aplicaciones.
