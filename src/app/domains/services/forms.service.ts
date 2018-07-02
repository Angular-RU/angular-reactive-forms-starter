import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Model, Order, Person } from '../model/model';

@Injectable()
export class FormsService {

  constructor (private fb: FormBuilder) {}

  public parse(model: Model): FormGroup {
    return this.fb.group({
      firstStep: this.fb.group({
        isSigned: false
      }),
      secondStep: this.fb.group({
        firstName: model.customer.firstName,
        secondName: model.customer.secondName,
        age: model.customer.age
      }),
      thirdStep: this.parseThirdStep(model)
    });
  }
  private parseThirdStep(model: Model): FormGroup {
    const orders: FormArray = this.fb.array(
      model.orders.map((order: Order) => this.fb.group({
        label: order.label,
        price: order.price
      }))
    );
    return this.fb.group({
      orders
    });
  }

  public convert(form: FormGroup): Model {
    const model = new Model();
    model.isAgreementSigned = form.get('firstStep').get('isSigned').value;
    model.customer = new Person();
    
    model.customer = {
      firstName: form.get('secondStep').get('firstName').value,
      secondName: form.get('secondStep').get('secondName').value,
      age: form.get('secondStep').get('age').value
    }
    model.orders = (form.get('thirdStep').get('orders') as FormArray).controls.map((group) => {
      const order = new Order();
      order.label = group.get('label').value;
      order.price = group.get('price').value;
      return order;
    })
    return model;
  }

}