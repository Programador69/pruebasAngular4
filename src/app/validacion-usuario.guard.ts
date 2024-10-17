import { CanActivateFn } from '@angular/router';
import { TokenService } from './token.service';
import { inject } from '@angular/core';

export const validacionUsuarioGuard: CanActivateFn = (route, state) => {
  const cookies = inject(TokenService)
  const usuario = cookies.obtenerValor();

  if (usuario == "true") {
    return true
  }

  alert("No cuentas con los permisos necesarios para acceder aqui");
  return false
};
