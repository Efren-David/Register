package com.cursojava.curso.dao;

import com.cursojava.curso.models.Producto;

import java.util.List;

public interface ProductoDao {

    List<Producto> getProductos();

    void eliminar(Long id);

    void registrar(Producto usuario);
    
   Producto getProductoPorId(Long id);

}
