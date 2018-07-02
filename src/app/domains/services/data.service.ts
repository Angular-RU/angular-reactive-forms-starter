import { Injectable } from '@angular/core';
import { Model, Person, Order } from '../model/model';

@Injectable()
export class DataService {

  public async getData() {
    const data = new Model();
    const person: Person = {
      firstName: 'Reactive',
      secondName: 'Reactor',
      age: 4
    }
    const orders: Order[] = [
      {
        label: 'Easy maintenance',
        price: 1199
      },
      {
        label: 'A lot of coding',
        price: 199
      },
      {
        label: 'Easy validations',
        price: 599
      }
    ];
    data.customer = person;
    data.orders = orders;
    return data;
  }
}