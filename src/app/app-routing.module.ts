import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRootComponent } from './pages/login/components/login-root/login-root.component';
import { HomeRootComponent } from './pages/home/components/home-root/home-root.component';
import { ListCharectersRootComponent } from './pages/list-characters/components/list-charecters-root/list-charecters-root.component';

const routes: Routes = [
  { path: 'login', component: LoginRootComponent },
  { path:"home", component:HomeRootComponent,children:[
  { path:"list-characters", component:ListCharectersRootComponent},

  ]},
  { path:"", redirectTo:"login", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
