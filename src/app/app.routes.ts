import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
// import { MembersComponent } from './members/members.component';
// import { AuthGuard } from './services/auth.service';
// import { SignupComponent } from './signup/signup.component';
// import { EmailComponent } from './email/email.component';

// export const router: Routes = [
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'login', component: LoginComponent },
//     { path: 'signup', component: SignupComponent },
//     { path: 'login-email', component: EmailComponent },
//     { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

// ]

import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';
import { SignupRoutes } from './signup/index';
import { EmailRoutes } from './email/index';
import { MembersRoutes } from './members/index';


export const routes: Routes = [
    ...HomeRoutes,
    ...LoginRoutes,
    ...SignupRoutes,
    ...EmailRoutes,
    ...MembersRoutes
];

// export const routes: ModuleWithProviders = RouterModule.forRoot(router);