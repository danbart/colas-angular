import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueo-ticket',
  templateUrl: './nueo-ticket.component.html',
  styleUrls: ['./nueo-ticket.component.css']
})
export class NueoTicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('container');
  }

}
