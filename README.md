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
 

# **🆕 Nuevas Funcionalidades en esta Versión**  

🔐 Dockerize the API:  
 <img width="1469" alt="Screenshot 2025-05-27 at 10 52 23 p m" src="https://github.com/user-attachments/assets/5507a3ae-f89c-4978-b3b0-bec2d6c0e19d" />


📄 Frontend:  
- Se integró frontend usando Axios y React.
<img width="1469" alt="Screenshot 2025-05-27 at 10 52 58 p m" src="https://github.com/user-attachments/assets/41d83a85-fd94-4549-a8de-ad21b55be700" />
<img width="1469" alt="Screenshot 2025-05-27 at 10 53 13 p m" src="https://github.com/user-attachments/assets/515cb6cb-c96a-40e9-9492-a8b4d6ae21c9" />
<img width="1469" alt="Screenshot 2025-05-27 at 10 53 32 p m" src="https://github.com/user-attachments/assets/b5169f03-b6ff-4be1-ae5e-75fc9e3abfb5" />
<img width="1469" alt="Screenshot 2025-05-27 at 10 53 47 p m" src="https://github.com/user-attachments/assets/8f13bd10-7a7d-4396-9928-2ceaa1ba57aa" />
<img width="1469" alt="Screenshot 2025-05-27 at 10 54 06 p m" src="https://github.com/user-attachments/assets/d29c4832-f3c8-4cb2-9406-c00c9bb2aa58" />

