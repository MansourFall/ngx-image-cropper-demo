import { Component, ElementRef, ViewChild } from '@angular/core';
import {DialogService} from 'primeng/dynamicdialog';

import { ImageCropComponent } from './image-crop/image-crop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService]
})
export class AppComponent {

  constructor(private dialogService: DialogService){}
  title = 'ngx-image-cropper-demo-app';
  croppedImage : string = "";

  @ViewChild('inputImage')
  inputImage!: ElementRef;



  setImageValue(event: any) {
    this.show(event);
  }

  resetInputImage() {
    this.inputImage.nativeElement.value = "";
  }

  show(event: any) {
    if(event.target.files.length !== 0){
      const ref = this.dialogService.open(ImageCropComponent, {
          data: {
              event
          },
          header: '',
          width: '70%'
      });

      ref.onClose.subscribe((croppedImage) => {
        if (croppedImage) {
            this.croppedImage = croppedImage;
        }
    });
  }
}
}

