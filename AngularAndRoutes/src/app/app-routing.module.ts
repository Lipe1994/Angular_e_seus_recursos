import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SecurityProductGuard } from './core/services/security-product.guard';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path: 'products',
    loadChildren: ()=> import('./pages/products/products.module').then(m => m.ProductsModule),
    canLoad: [SecurityProductGuard],// se pode carregar o modulo
    canActivate: [SecurityProductGuard],// se pode navegar no modulo
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
