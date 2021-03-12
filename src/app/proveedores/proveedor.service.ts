import { Injectable } from '@angular/core';
import { PROVEEDORES } from './proveedores.json';
import { Proveedor } from './proveedor';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor() { }

  getProveedores(): Observable<Proveedor[]>{
    return of(PROVEEDORES);
  }
}
