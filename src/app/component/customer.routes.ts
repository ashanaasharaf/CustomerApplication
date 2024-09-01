import { Routes } from "@angular/router";

export const CustomerRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./customer-list/customer-list.component').then(m => m.CustomerListComponent)
    },
    {
        path: 'list',
        loadComponent: () => import('./customer-list/customer-list.component').then(m => m.CustomerListComponent)
    },
    {
        path: 'add',
        loadComponent: () => import('./customer-add/customer-add.component').then(m => m.CustomerAddComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./customer-edit/customer-edit.component').then(m => m.CustomerEditComponent)
    }

]