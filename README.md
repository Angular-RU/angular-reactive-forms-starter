# Angular Reactive Forms Starter

## Installation
For angular 6:
```bash
$ git clone https://github.com/Angular-RU/angular-reactive-forms-starter.git
$ cd angular-reactive-forms-starter
$ npm i
$ npm start
```

## Description
![](https://pp.userapi.com/c849336/v849336677/1bfc3/GrzAWrMLeS8.jpg)
### You have:
1. `MainComponent` - Component at the top of the form.
2. `FormService` - Service, you can use for parsing or converting `Model`<=>`Form`
3. `NestedComponents` - Dummy components. Their main mission is to bind form controls to elements in the template. If needed you can inject `FormsService` and use it to generate new `FormGroup` in `FormArray` etc.

## Principles
1. `NestedComponents` **must** be stupid! Only some validators declatations, subscribtions on changing, without strong logic
2. You should cover `FormsService` with unit tests.
3. You can move some transformation parts from `FormsService` to more convinient places. 
> *For example*: 
> 
> Transformation logic, related to `ThirdStepComponent` can be in `ThirdStepService` in same folder.

## Things to do:

We want to create transforming package, which will be able convert json directly to form and visa versa. 

Without any middle form<->model and model<->json,  transformations

