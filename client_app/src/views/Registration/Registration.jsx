import React from 'react';
import './Registration.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import CustomLink from '../../components/UI/CustomLink/CustomLink';
import IconUsuario from '../../components/UI/Iconos/Usuario/iconUsuario';

function Registration() {
  return (
    <form>
        <a href="/Login">
          <button type="button" className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close" _mstaria-label="59709">
            <span aria-hidden="true"></span>
          </button>
        </a>

        <div className="contenedor">

          <IconUsuarioAdd/>

          <h3 className='h3'>Registro</h3>
          <Input
            name="Correo electrónico"
            type="email"
            placeholder="Ingrese su correo electrónico"
            className="input"
          />
          <Input
            name="Contraseña"
            type="password"
            className="input"
            placeholder="Ingrese su contraseña"
          />
          <Button type="submit" className="custom-button">
            Registrar
          </Button>
          <CustomLink to="/login" className="custom-link">
            Ingresar
          </CustomLink>
        </div>
      </form>
    );
}

export default Registration;
