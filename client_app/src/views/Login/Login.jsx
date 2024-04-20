import React from 'react'
import './style.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import CustomLink from '../../components/UI/CustomLink/CustomLink'
import IconUsuario from '../../components/UI/Iconos/Usuario/iconUsuario'

function Login() {
  return (
    <form>
        
        <div className="contenedor">
          <IconUsuario/>

          <h3 className='h3'>Sign In</h3>
          <Input
            name={"Correo eletrónico"}
            type={"email"}
            placeholder={"Ingrese su correo eletrónico"}
            className={"input"}
          />

          <Input
            name={"Contraseña"}
            type={"password"}
            className={"input"}
            placeholder={"Ingrese su contraseña"}          
          />

          <Button type={"sumit"} className={"custom-button"}>
            Ingresar
          </Button>

          <CustomLink to="/registration" className={"custom-link"}>Registarse</CustomLink>

        </div>
      </form>
    )
}

export default Login