package com.cursojava.curso.controllers;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cursojava.curso.dao.ProductoDao;
import com.cursojava.curso.models.Producto;

@RestController
public class ProductoController {

    @Autowired
    private ProductoDao productoDao;



    @RequestMapping(value = "api/listarProductos", method = RequestMethod.GET)
    public List<Producto> listarProductos(@RequestHeader(value="Authorization") String token) {
        return productoDao.getProductos();
    }


    @RequestMapping(value = "api/registrarProducto", method = RequestMethod.POST)
    public void registrarProducto(@RequestBody Producto product) {
    	product.setFechaEntrada(new Date());
    	product.setFechaVenta(new Timestamp(new Date().getTime()));
        productoDao.registrar(product);
    }
    
    @RequestMapping(value = "api/modificarProducto", method = RequestMethod.PUT)
    public void modificarProducto(@RequestBody Producto product) {
        productoDao.registrar(product);
    }

    @RequestMapping(value = "api/eliminaProducto/{id}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable Long id) {
        productoDao.eliminar(id);
    }
    
    
    @RequestMapping(value = "api/actualizaProducto/{id}", method = RequestMethod.DELETE)
    public void eliminar(@RequestBody Producto product) {
        productoDao.registrar(product);
    }

    
    @RequestMapping(value = "api/obtenerProducto/{id}", method = RequestMethod.GET)
    public Producto getProductoPorId(@PathVariable Long id) {
    	return productoDao.getProductoPorId(id);
    }
    
}
