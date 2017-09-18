import { Route } from '@angular/router';
import { MembersComponent } from './members.component';
import { AuthGuard } from '../services/auth.service';

export const MembersRoutes: Route[] = [
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }
];
