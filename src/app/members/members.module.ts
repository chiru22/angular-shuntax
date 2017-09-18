import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';

@NgModule({
    imports: [CommonModule],
    declarations: [MembersComponent],
    exports: [MembersComponent]
})

export class MembersModule { }
