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

import com.example.library.model.Book;
import com.example.library.services.BookService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping("/api/books")
@Api(value = "API de Libros", tags = "Libros", description = "Operaciones para gestionar la biblioteca")
public class BookController {

    @Autowired
    private BookService bookService;

    @ApiOperation(value = "Obtener todos los libros", notes = "Regresa todos los libros")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Lista de libros obtenida correctamente")
    })
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @ApiOperation(value = "Obtener un libro por su ID", notes = "Proporciona el ID de un libro para obtener sus detalles")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Libro encontrado"),
        @ApiResponse(code = 404, message = "Libro no encontrado")
    })
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(
            @ApiParam(value = "ID del libro a consultar", required = true)
            @PathVariable Long id) {
        return bookService.getBookById(id)
                .map(book -> ResponseEntity.ok().body(book))
                .orElse(ResponseEntity.notFound().build());
    }

    @ApiOperation(value = "Crear un libro", notes = "Crea un nuevo libro en la base de datos")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Libro creado correctamente")
    })
    @PostMapping("/createbook")
    public Book createBook(
            @ApiParam(value = "Objeto libro que se desea registrar", required = true)
            @RequestBody Book book) {
        return bookService.createBook(book);
    }

    @ApiOperation(value = "Actualizar un libro", notes = "Actualiza los detalles de un libro con su ID")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Libro actualizado correctamente"),
        @ApiResponse(code = 404, message = "Libro no encontrado")
    })
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(
            @ApiParam(value = "ID del libro a actualizar", required = true)
            @PathVariable Long id,
            @ApiParam(value = "Nuevos datos del libro", required = true)
            @RequestBody Book bookDetails) {
        return bookService.updateBook(id, bookDetails)
                .map(updatedBook -> ResponseEntity.ok(updatedBook))
                .orElse(ResponseEntity.notFound().build());
    }

    @ApiOperation(value = "Eliminar un libro", notes = "Elimina un libro de la biblioteca")
    @ApiResponses(value = {
        @ApiResponse(code = 204, message = "Libro eliminado correctamente"),
        @ApiResponse(code = 404, message = "Libro no encontrado")
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(
            @ApiParam(value = "ID del libro a eliminar", required = true)
            @PathVariable Long id) {
        boolean deleted = bookService.deleteBook(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
