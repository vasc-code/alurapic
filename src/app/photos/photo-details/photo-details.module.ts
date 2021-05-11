import { RouterModule } from '@angular/router';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

@NgModule({
  declarations:
  [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  exports:
  [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  imports:
  [
    PhotoModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    VMessageModule
  ]
})

export class PhotoDetailsModule {

}
