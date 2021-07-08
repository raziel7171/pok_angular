import { Component, OnInit } from '@angular/core';
import { toBase64 } from '../utilities';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {

  constructor() { }

  imgBase64!: string;

  ngOnInit(): void {
  }

  change(event: any){
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: any) => this.imgBase64 = value)
      .catch(error => console.log(error));
    }
  }

}
