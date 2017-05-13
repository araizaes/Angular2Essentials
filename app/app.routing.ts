import { Routes } from '@angular/router';

import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const appRoute: Routes = [
{ path: 'add', component: MediaItemFormComponent },
{ path: 'medium', component: MediaItemlistComponent },
{ path: '', pathMatch: 'full', redirectTo: 'all' }
];
