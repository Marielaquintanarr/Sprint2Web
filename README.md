# **📚 Library Management System**  
Este proyecto es una biblioteca en la cual se pueden buscar, crear o eliminar libros por ID o en general.

# **🛠️ Conexión a la Base de Datos**  
Para conectarse a la base de datos, copia el path de tu WalletLibrary local y pégalo en la primera línea del archivo application.properties.

# **🔐 Autenticación y Seguridad - JWT**  
Para acceder a los endpoints de la API, se implementó JWT Authentication.  
Solo usuarios autenticados pueden acceder a los recursos protegidos.

# **🧾 Login**  
🔗 POST → http://localhost:8080/api/auth/login

```json
{
  "username": "admin",
  "password": "password"
}
```

✅ Si los datos son correctos, recibirás un token JWT.  
❌ Si no, obtendrás un error de credenciales inválidas.

# **📥 Usar el Token**  
Agrega el token en el header de tus requests así:

```makefile
Authorization: Bearer [Token]
```

# **📚 Endpoints**  
🔍 Obtener todos los libros  
GET → http://localhost:8080/api/books

🔍 Obtener libro por ID  
GET → http://localhost:8080/api/books/{id}

Ejemplo:  
http://localhost:8080/api/books/1

⚠️ Si recibes error 403, asegúrate de estar autenticado correctamente.

# **🚀 Documentación Swagger**  
La API cuenta con documentación interactiva generada por Swagger.  
Puedes consultarla en:

```bash
http://localhost:8080/swagger-ui/index.html
```
o
```bash
http://localhost:8080/swagger-ui.html
```

En Swagger podrás:

- Ver todos los endpoints disponibles 🧩  
- Probarlos directamente desde el navegador 🧪  
- Consultar los parámetros y respuestas esperadas 📘  

# **🆕 Nuevas Funcionalidades en esta Versión**  

🔐 Secure the API:  
- Se implementó autenticación con JWT.  
- Solo usuarios autenticados pueden acceder a ciertos endpoints.  
- Se creó un endpoint para emitir tokens JWT tras el login.  

📄 Swagger Integration:  
- Se integró Swagger en la aplicación Spring Boot.  
- Todos los endpoints están documentados con anotaciones Swagger.

---

¿Quieres que le dé también formato con Markdown completo o que lo pase a otro formato como PDF o HTML?
