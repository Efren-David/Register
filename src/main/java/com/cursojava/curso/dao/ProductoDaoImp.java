package com.cursojava.curso.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.cursojava.curso.models.Producto;

@Repository
@Transactional
public class ProductoDaoImp implements ProductoDao {

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Producto> getProductos() {
        String query = "FROM Producto";
        return entityManager.createQuery(query).getResultList();
    }
    
    @Override
    public void eliminar(Long id) {
    	Producto usuario = entityManager.find(Producto.class, id);
        entityManager.remove(usuario);
    }

    @Override
    public void registrar(Producto produc) {
        entityManager.merge(produc);
    }
    
 
    @Override
    public Producto getProductoPorId(Long id) {
    	Producto produc= entityManager.find(Producto.class, id);
    	return produc;
    }
   

}
