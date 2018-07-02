import { Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

export abstract class SimpleFormComponent {
  @Input() form: FormGroup;
}