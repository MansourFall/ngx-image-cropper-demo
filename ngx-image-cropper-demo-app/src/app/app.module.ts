import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ImageCropperModule } from 'ngx-image-cropper';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCropComponent } from './image-crop/image-crop.component';
import {AvatarModule} from 'primeng/avatar';
import { Base64ToImgPipe } from './base64-to-img.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageCropComponent,
    Base64ToImgPipe
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ImageCropperModule,
    DynamicDialogModule,
    ButtonModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
