import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then(m => m.RegisterModule)
  },
  { 
    path: 'access',
    loadChildren: () => import('./pages/access/access.module').then(m => m.AccessModule)
  },
  { 
    path: '**',
    redirectTo:'', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
