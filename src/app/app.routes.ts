import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DeporteComponent } from './pages/deporte/deporte.component';

export const routes: Routes = [
    {
        path : 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'deporte',
        component:DeporteComponent
    },
    {
        path:'**',
        redirectTo: 'home'
    }
];
