import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html'
})
export class ProveedoresComponent implements OnInit {

  title:string = 'Proveedores';
  proveedores:Proveedor[] = [];

  constructor(private proveedorService: ProveedorService) {
    this.proveedores = [];
  }

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe(
      proveedores => this.proveedores = proveedores
    );
  }

}
