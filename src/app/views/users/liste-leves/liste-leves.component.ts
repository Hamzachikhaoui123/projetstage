import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-liste-leves',
  templateUrl: './liste-leves.component.html',
  styleUrls: ['./liste-leves.component.css']
})
export class ListeLevesComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  delete() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

}
