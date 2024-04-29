import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {path: 'create', component: CreateComponent},
    {path: 'list', component: ListComponent},
    {path: 'details/:id', component: DetailsComponent}
];
