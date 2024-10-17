import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validacionUsuarioGuard } from './validacion-usuario.guard';

describe('validacionUsuarioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validacionUsuarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
