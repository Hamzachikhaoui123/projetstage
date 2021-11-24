import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-payment',
  templateUrl: './liste-payment.component.html',
  styleUrls: ['./liste-payment.component.css']
})
export class ListePaymentComponent implements OnInit {
listePayment=[
  {
    name:"hamza",
    age: 20,
     etat:"payee"
  },
  {
    name:"hg",
    age: 20,
     etat:"hj"
  }
]

  

  constructor() { }

  ngOnInit(): void {

  }
   
}
