import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleFormComponent } from '../../domains/components/simple-form.component.class';

@Component({
  selector: 'first-step',
  templateUrl: 'first-step.component.html'
})
export class FirstStepComponent extends SimpleFormComponent {}