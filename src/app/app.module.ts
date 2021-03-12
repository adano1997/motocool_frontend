import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoService } from './productos/producto.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorService } from './proveedores/proveedor.service';
import { FormComponent } from './productos/form.component';
import { FormsModule } from '@angular/forms';

  const routes: Routes = [
    { path: '', redirectTo: '/productos', pathMatch: 'full'},
    { path: 'productos', component: ProductosComponent},
    { path: 'proveedores', component: ProveedoresComponent},
    { path: 'productos/form', component: FormComponent },
    { path: 'productos/form/:id', component: FormComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AsideComponent,
    FooterComponent,
    ProductosComponent,
    ProveedoresComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductoService,
    ProveedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
