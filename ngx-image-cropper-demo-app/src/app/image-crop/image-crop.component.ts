import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss']
})
export class ImageCropComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(public ref: DynamicDialogRef,public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    console.log(this.config.data?.event)
    this.imageChangedEvent = this.config.data?.event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}

imageLoaded() {
  // show cropper
}
cropperReady() {
  // cropper ready
}
loadImageFailed() {
  // show message
}

  onCancel() {
    this.ref.close();
  }

  onApply(croppedImage:any){
    this.ref.close(croppedImage);
  }
}
