import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('container');
  }

}
