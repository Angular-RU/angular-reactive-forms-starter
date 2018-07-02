import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../domains/services/data.service';
import { FormsService } from '../domains/services/forms.service';

@Component({
  selector: 'main-form',
  templateUrl: 'main-form.component.html'
})
export class MainFormComponent  {
  @Input() name: string;
  form;
  private model;
  

  constructor(
    private dataService: DataService,
    private formsService: FormsService,
    private fb: FormBuilder
    ) {}
  
  async ngOnInit() {
    this.model = await this.dataService.getData();
    this.form = this.formsService.parse(this.model);
  }

  onSubmit() {
    const newModel = this.formsService.convert(this.form);
    console.log(newModel);
  }
  
  
}
