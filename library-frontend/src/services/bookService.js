// src/services/bookService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/books';

const getToken = () => localStorage.getItem('token');

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getAllBooks = () => axios.get(API_URL, config());
export const getBookById = (id) => axios.get(`${API_URL}/${id}`, config());
export const createBook = (book) => axios.post(API_URL, book, config());
export const updateBook = (id, book) => axios.put(`${API_URL}/${id}`, book, config());
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`, config());
