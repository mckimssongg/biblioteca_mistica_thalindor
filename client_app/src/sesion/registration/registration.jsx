import IconUsuarioAdd from '../../componentes/iconos/iconUsuarioAdd';
import Input from '../../componentes/input';
import '../style.css';
import Button from '../../componentes/button';
import { Link } from 'react-router-dom';
//import Login from '../login/login';

export default function Registration() {
  return (

    <div className='contenedor'>

      <div className='div_center'>
        <IconUsuarioAdd />

        <Input 
          type="text"
          placeholder="Nombre"
          className={"input"}
        />

        <Input 
          type="text"
          placeholder="Correo electronico"
          className={"input"}
        />

        <Input 
          type="text"
          placeholder="Contraseña"
          className={"input"}
        />

        <Button className="boton_relleno">
          Registrar
        </Button>

        <Link to="/" className="link">
          Volver al inicio
        </Link>
    
      </div>
        
    </div>
  )
}
