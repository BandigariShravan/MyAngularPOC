import { Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'sample', loadComponent: () => import('./components/sample/sample.component').then(m => m.SampleComponent) },
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'forgot-password', loadComponent: ()=>import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  { path: '**', redirectTo: 'login' } // Redirect any unknown routes to login

];
