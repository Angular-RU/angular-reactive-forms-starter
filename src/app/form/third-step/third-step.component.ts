import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { SimpleFormComponent } from '../../domains/components/simple-form.component.class';
import { Order } from '../../domains/model/model';

@Component({
  selector: 'third-step',
  templateUrl: './third-step.component.html',
  styles: ['.mat-card {margin: 20px}']
})
export class ThirdStepComponent extends SimpleFormComponent {

  addNewOrder () {
    const label = 'Enter new name';
    const price = 'Enter price';
    const newOrder = new FormGroup({
      label: new FormControl(''),
      price: new FormControl(0)
    });

    (this.form.get('orders') as FormArray).push(newOrder);
  }
}