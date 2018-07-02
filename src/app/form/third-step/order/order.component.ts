import { Component, OnInit } from '@angular/core';
import { SimpleFormComponent } from '../../../domains/components/simple-form.component.class';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends SimpleFormComponent {}