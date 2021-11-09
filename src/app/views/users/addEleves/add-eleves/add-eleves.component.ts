import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-eleves',
  templateUrl: './add-eleves.component.html',
  styleUrls: ['./add-eleves.component.css']
})
export class AddElevesComponent implements OnInit {
  addCategoryForm: FormGroup;
  constructor(private fb: FormBuilder ,  private router:Router,private toastr: ToastrService) {
    let formContols = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ])
    }
    this.addCategoryForm = this.fb.group(formContols)
   }
   get name() { return this.addCategoryForm.get('name') }
  ngOnInit(): void {
  }

}
