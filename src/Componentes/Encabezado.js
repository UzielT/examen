import React,{Component} from 'react';
import './Encabezado.css';
import logo from './logo.png';

class Encabezado extends Component{
    render(){
        
        return(
            <div className="Encabezado">
                <img src={logo} className="logo"/>
                <br></br>
                <p>[Examen] Torres Sanchez Uziel Enrique #16212370</p>
            </div>
            
              );

    }
}


export default Encabezado;