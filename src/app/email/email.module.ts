import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { EmailComponent } from './email.component';

@NgModule({
    imports: [CommonModule,FormsModule],
    declarations: [EmailComponent],
    exports: [EmailComponent]
})

export class EmailModule { }
