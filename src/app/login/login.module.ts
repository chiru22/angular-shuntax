import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [CommonModule,BrowserAnimationsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
