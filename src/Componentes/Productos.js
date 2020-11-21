import React,{Component} from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productos.css';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

class Productos extends Component{
   
    //Agregando el state
    state = {
        carrito:[],
        total:0,
        productosLista:[
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899},
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999},
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850},
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949},
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699},
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999},
        ],
        };

        remove = (index, c) => {

          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Eliminado',
            showConfirmButton: false,
            timer: 4500
          })
      
          this.state.carrito.splice(index, 1);
      
          this.setState({
            ...this.state,
            total: this.state.total - c
          })
      
        }
      
        send = (a, b, c) => {

          console.log(a + b + c)
      
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado',
            showConfirmButton: false,
            timer: 4500
          })
      
          this.setState({
            ...this.state,
            carrito: [...this.state.carrito, { codigo: a, descripcion: b, precio: c }],
            
      
          })
      
        }
    render(){
        
        // destructuring 
      
        const {codigo,descripcion,precio,total}= this.state;
        
        return(
           
          // Agregando tabla y botones 

            <div className="Productos">  
            <h3 align="center">Productos</h3>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th></th> 
              </tr>
            </thead>
            <tbody>
            {
                // Mostrando mi lista de productos con la funcion .map

              this.state.productosLista.map((a,index)=>
                <tr key={index}>
                    <td>{a.codigo}</td>
                    <td>{a.descripcion}</td>
                    <td>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={() => this.send(a.codigo, a.descripcion, a.precio)} variant="success">agregar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
            <h3 align="center">Mi carrito</h3>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th></th> 
              </tr>
            </thead>
            <tbody>
            {
                // Mostrando mi lista de productos en carrito con la funcion .map
              this.state.carrito.map((a,index)=>
                <tr key={index}>
                    <td>{a.codigo}</td>
                    <td>{a.descripcion}</td>
                    <td>${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
                    <td><Button onClick={() => this.remove(index,a.precio)} variant="danger">eliminar</Button></td>
                </tr>
              )
            }
              </tbody>
            </Table>
          
            </div>
              );

    }
}


export default Productos;