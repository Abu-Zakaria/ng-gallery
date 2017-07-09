import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  inputs: ['photoname']

})
export class PhotoComponent implements OnInit {
  public photoname;

  constructor() { }

  ngOnInit() {
  }

}
