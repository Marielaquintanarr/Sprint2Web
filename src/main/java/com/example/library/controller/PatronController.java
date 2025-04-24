package com.example.library.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.library.model.Patron;
import com.example.library.repository.PatronRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api/patrons")
@Api(value = "API de Usuarios", description = "Operaciones para la gestión de usuarios de la biblioteca")
public class PatronController {

    @Autowired
    private PatronRepository patronRepository;

    @ApiOperation(value = "Obtener todos los usuarios", notes = "Devuelve todos los usuarios.")
    @GetMapping
    public List<Patron> getAllPatrons() {
        return patronRepository.findAll();
    }

    @ApiOperation(value = "Obtener un usuario por ID", notes = "Devuelve los datos del usuario")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Usuario encontrado exitosamente"),
        @ApiResponse(code = 404, message = "Usuario no encontrado")
    })
    @GetMapping("/{id}")
    public ResponseEntity<Patron> getPatronById(@PathVariable Long id) {
        return patronRepository.findById(id)
                .map(patron -> ResponseEntity.ok().body(patron))
                .orElse(ResponseEntity.notFound().build());
    }

    @ApiOperation(value = "Crear un nuevo usuario", notes = "Guardar un nuevo usuario.")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Usuario creado exitosamente")
    })
    @PostMapping
    public Patron createPatron(@RequestBody Patron patron) {
        return patronRepository.save(patron);
    }

    @ApiOperation(value = "Actualizar un usuario", notes = "Actualiza la información de un usuario.")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Usuario actualizado"),
        @ApiResponse(code = 404, message = "Usuario no encontrado")
    })
    @PutMapping("/{id}")
    public ResponseEntity<Patron> updatePatron(@PathVariable Long id, @RequestBody Patron patronDetails) {
        return patronRepository.findById(id)
                .map(patron -> {
                    patron.setFirstName(patronDetails.getFirstName());
                    patron.setLastName(patronDetails.getLastName());
                    patron.setEmail(patronDetails.getEmail());
                    patron.setPhoneNumber(patronDetails.getPhoneNumber());
                    patron.setAddress(patronDetails.getAddress());
                    patron.setCity(patronDetails.getCity());
                    patron.setState(patronDetails.getState());
                    patron.setZipCode(patronDetails.getZipCode());
                    patron.setDateOfBirth(patronDetails.getDateOfBirth());
                    patron.setMembershipStatus(patronDetails.getMembershipStatus());
                    patron.setLastVisit(patronDetails.getLastVisit());
                    Patron updatedPatron = patronRepository.save(patron);
                    return ResponseEntity.ok(updatedPatron);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @ApiOperation(value = "Eliminar un usuario", notes = "Elimina un usuario.")
    @ApiResponses(value = {
        @ApiResponse(code = 204, message = "Usuario eliminado"),
        @ApiResponse(code = 404, message = "Usuario no encontrado")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatron(@PathVariable Long id) {
        return patronRepository.findById(id)
                .map(patron -> {
                    patronRepository.delete(patron);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
