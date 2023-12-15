package com.cursojava.curso.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "producto")
public class Producto {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "CLAVE")
    private String clave;

    @Column(name = "NOMBRE_PRODUCTO")
    private String nombreProducto;

     @Column(name = "SUCURSAL")
    private String sucursal;

     @Column(name = "TELEFONO")
    private String telefono;

     @Column(name = "FECHA_ENTRADA")
    private Date fechaEntrada;
     
     @Column(name = "FECHA_VENTA")
     private Timestamp fechaVenta;
     
     @Column(name = "VENDEDOR")
     private String vendedor;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getClave() {
		return clave;
	}

	public void setClave(String clave) {
		this.clave = clave;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public String getSucursal() {
		return sucursal;
	}

	public void setSucursal(String sucursal) {
		this.sucursal = sucursal;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}


	public String getVendedor() {
		return vendedor;
	}

	public void setVendedor(String vendedor) {
		this.vendedor = vendedor;
	}
	
	

	public Date getFechaEntrada() {
		return fechaEntrada;
	}

	public void setFechaEntrada(Date fechaEntrada) {
		this.fechaEntrada = fechaEntrada;
	}

	public Timestamp getFechaVenta() {
		return fechaVenta;
	}

	public void setFechaVenta(Timestamp fechaVenta) {
		this.fechaVenta = fechaVenta;
	}

	@Override
	public String toString() {
		return "Producto [id=" + id + ", clave=" + clave + ", nombreProducto=" + nombreProducto + ", sucursal="
				+ sucursal + ", telefono=" + telefono + ", fechaEntrada=" + fechaEntrada + ", fechaVenta=" + fechaVenta
				+ ", vendedor=" + vendedor + "]";
	}
     

	


}
