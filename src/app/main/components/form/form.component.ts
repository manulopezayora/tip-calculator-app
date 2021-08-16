import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form;

  constructor() {
    this.form = new FormGroup({
      bill: new FormControl('')
    });
  }

  ngOnInit(): void {}
}
