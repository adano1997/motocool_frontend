import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint:string = 'http://localhost:8080/api/productos';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Producto[])
    );
  }

  create(producto: Producto) : Observable<Producto>{
    return this.http.post<Producto>(this.urlEndPoint, producto, { headers: this.httpHeaders })
  }

  getProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.urlEndPoint}/${id}`)
  }

  update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.urlEndPoint}/${producto.idProducto}`, producto, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
