import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public producto: Producto = new Producto();
  public titulo:string = "Crear Producto";

  constructor(private productoService: ProductoService, private router: Router, private activatedRoute: ActivatedRoute){
    //
  }

  ngOnInit(): void {
    this.cargarProducto()
  }

  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params ['id']
      if(id){
        this.productoService.getProducto(id).subscribe( (producto) => this.producto = producto)
      }
    })
  }

  public create(): void{
    this.productoService.create(this.producto)
      .subscribe(producto => {
        this.router.navigate(['/productos'])
        swal.fire('Nuevo Producto', `Producto ${producto.nombre} creado con éxito!`, 'success')
      }
    );
  }

  public update(): void{
    this.productoService.update(this.producto)
    .subscribe( producto => {
      this.router.navigate(['/productos'])
      swal.fire('Producto Actualizado',`Producto ${producto.nombre} actualizado con éxito!`, 'success')
    })
  }
}
