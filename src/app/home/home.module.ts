import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [CommonModule,BrowserAnimationsModule,FormsModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
