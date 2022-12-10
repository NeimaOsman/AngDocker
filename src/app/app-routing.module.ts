import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const routes: Routes = [
  {path:'first-component',component:FirstComponentComponent},
  {path:'second-component',component:SecondComponentComponent},
  {path:'',redirectTo:'/first-component',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
