import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';
import { GroupedObservable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
   }

  contactForm: FormGroup;

  createFormGroup() {
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      message: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onResetForm() {
    this.contactForm.reset();
  }
  onSaveForm() {
    this.dbData.saveMessage(this.contactForm.value);
  }
}
