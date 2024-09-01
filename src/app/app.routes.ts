import { Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'customer',
        pathMatch: 'full'
      },
    {
        path:'customer',
        loadChildren:()=>import('./component/customer.routes').then(c=>c.CustomerRoutes)
    },

];


