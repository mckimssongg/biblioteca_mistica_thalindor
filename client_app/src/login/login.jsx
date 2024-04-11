
import IconUsuario from '../componentes/iconos/iconUsuario';
import Input from '../componentes/input';
import './login.css';
import Button from '../componentes/button';
import RegisterLink from '../componentes/link';



export default function Login() {
  return (

    <div className='contenedor'>

      <div className='div_center'>
        <IconUsuario />
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
          Iniciar sesión
        </Button>
        
        <RegisterLink href="/registro" className="link">
          Regístrate aquí
        </RegisterLink>
    
      </div>
        
    </div>
  )
}
