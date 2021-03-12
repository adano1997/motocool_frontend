import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  title:string = 'Productos';
  productos:Producto[] = [];

  constructor(private productoService: ProductoService) {
    this.productos = [];
  }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

  delete(producto: Producto): void{
    swal.fire({
        title: '¿Está seguro?',
        text: "¿Seguro que desea eliminar el producto?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!'
      }).then((result) => {
        if(result.value){
          this.productoService.delete(producto.idProducto).subscribe(
            response => {
              this.productos = this.productos.filter(pro => pro !== producto)
              swal.fire(
                'Eliminado!',
                'Se ha eliminado el producto!',
                'success'
              )
            }
          )
        }
      })
  }

}
