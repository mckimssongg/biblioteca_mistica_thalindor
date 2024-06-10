import React from 'react';
import './Registration.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import CustomLink from '../../components/UI/CustomLink/CustomLink';
import IconUsuario from '../../components/UI/Iconos/Usuario/iconUsuario';

function Registration() {
  return (
    <div className="registration-container">
      <form>
        <div className="common-container">
          <IconUsuario />
          <h3 className="h3">Register</h3>
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
    </div>
  );
}

export default Registration;
