import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from "../user/user-info/user-info.component";
import { TranslateModule } from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [
    UserInfoComponent
  ],
  exports:[
    UserInfoComponent,
    TranslateModule,
    FormsModule
  ]
})
export class SharedModule { }
