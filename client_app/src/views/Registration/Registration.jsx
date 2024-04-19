import React from 'react'

import './style.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import CustomLink from '../../components/UI/CustomLink/CustomLink'
import IconUsuarioAdd from '../../components/UI/Iconos/Usuario/iconUsuarioAdd'

export default function Registration() {
  return (
    <form>
        <div className="contenedor">

          <IconUsuarioAdd/>

          <h3>Registro</h3>
          <Input
            name={"Nombre"}
            type={"text"}
            placeholder={"Ingrese su nombre"}
            className={"input"}
          />

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
            Registrarse
          </Button>

          <CustomLink to="/login" className={"custom-link"}>Regresar</CustomLink>

        </div>
      </form>
  )
}