export class Model {
  isAgreementSigned: boolean;
  customer: Person;
  orders: Order[];
}

export class Person {
  firstName: string;
  secondName: string;
  age: number;
}

export class Order {
  label: string;
  price: number;

}