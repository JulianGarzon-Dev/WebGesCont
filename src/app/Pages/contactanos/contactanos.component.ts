import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  lat = 51.6;
  lng = 7.8;

  constructor() { }

  ngOnInit(): void {
  }

}
