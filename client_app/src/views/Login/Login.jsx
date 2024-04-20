import React from 'react'
import './Login.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import CustomLink from '../../components/UI/CustomLink/CustomLink'
import IconUsuario from '../../components/UI/Iconos/Usuario/iconUsuario'

function Login() {
  return (
    <div className='login-container'> 
      <form>
        <div className="contenedor">
          <IconUsuario/>
          <h3 className='h3'>Sign In</h3>
          <Input
            name={"Correo electrónico"}
            type={"email"}
            placeholder={"Ingrese su correo electrónico"}
            className={"input"}
          />
          <Input
            name={"Contraseña"}
            type={"password"}
            className={"input"}
            placeholder={"Ingrese su contraseña"}          
          />
          <Button type={"submit"} className={"custom-button"}>
            Ingresar
          </Button>
          <CustomLink to="/registration" className={"custom-link"}>Registrarse</CustomLink>
        </div>
      </form>
    </div>
  )
}

export default Login
