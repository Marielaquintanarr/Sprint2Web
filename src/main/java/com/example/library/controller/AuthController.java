package com.example.library.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.library.model.User;
import com.example.library.security.JwtService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@CrossOrigin(origins = "http://localhost:3000") // 👈 Correctamente a nivel de clase
@RestController
@RequestMapping("/api/auth")
@Api(value = "API de Autenticación", description = "Autenticación de usuarios")
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @ApiOperation(value = "Inicio de sesión", 
                  notes = "Este endpoint permite al usuario iniciar sesión y recibir un token JWT.",
                  response = String.class)
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Inicio de sesión exitoso"),
        @ApiResponse(code = 401, message = "Credenciales inválidas")
    })
    @PostMapping("/login") // 👈 Esto ya está bien
    public ResponseEntity<?> login(@RequestBody User user) {
        System.out.println("Username: " + user.getUsername());
        System.out.println("Password: " + user.getPassword());

        if ("admin".equals(user.getUsername()) && "password".equals(user.getPassword())) {
            String token = jwtService.generateToken(user.getUsername());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Credenciales inválidas");
        }
    }
}
