import { SignUpService } from './signup/signup.service';
import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:
  [
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports:
  [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [
    SignUpService
  ]
})

export class HomeModule { }
