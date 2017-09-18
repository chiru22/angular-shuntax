import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SignupComponent } from './signup.component';

@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [SignupComponent],
    exports: [SignupComponent]
})

export class SignupModule { }
