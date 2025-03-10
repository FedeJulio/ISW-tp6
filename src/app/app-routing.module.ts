import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DireccionLocalComponent } from './components/direccion-local/direccion-local.component';
import { EntregaComponent } from './components/entrega/entrega.component';
import { MedioDePagoComponent } from './components/medio-de-pago/medio-de-pago.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  {path: '', component: PedidoComponent},
  {path: 'direccion-local', component: DireccionLocalComponent},
  {path: 'entrega', component: EntregaComponent},
  {path: 'medio-de-pago', component: MedioDePagoComponent},
  {path: 'resumen', component: ResumenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
