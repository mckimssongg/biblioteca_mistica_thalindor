import React from 'react'
import './Registration.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import CustomLink from '../../components/UI/CustomLink/CustomLink'
import IconUsuarioAdd from '../../components/UI/Iconos/Usuario/iconUsuarioAdd'

export default function Registration() {
  return (
    <div className='registration-container'>
      <form > 
        <div className="contenedor">
          <IconUsuarioAdd/>
          <h3 className='h3'>Registro</h3>
          <Input
            name={"Nombre"}
            type={"text"}
            placeholder={"Ingrese su nombre"}
            className={"input"}
          />
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
            Registrarse
          </Button>
          <CustomLink to="/login" className={"custom-link"}>Regresar</CustomLink>
        </div>
      </form>
    </div>
  )
}
