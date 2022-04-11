import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from './pages/leave/leave.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
{
  path:"regis",
  component:RegisterComponent,
  pathMatch:'full',
},
{
  path:"login",
  component:LoginComponent,
  pathMatch:'full',
},
{
  path:"leave",
  component:LeaveComponent,
  pathMatch:'full',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
