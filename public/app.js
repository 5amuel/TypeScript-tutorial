import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a:string): void
//   spend(a:number): number
// }
// const me: IsPerson ={
//   name: 'sam',
//   age: 35,
//   speak(text: string): void {
//     console.log('text')
//   },
//   spend(amount: number): number {
//     console.log('I spent', amount)
//     return amount
//   }
// }
// const greetPerson = (person: IsPerson) => {
//   console.log('hello ', person.name)
// }
// greetPerson(me);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('Mario', 'Plumbing work', 200)
// const invOne = new Invoice('mario', 'work on mario game', 250 );
// const invTwo = new Invoice('luigui', 'work on mario game', 350 );
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
// invoices.forEach(inv =>{
//   console.log(inv.recipient, inv.amount, inv.format())
// })
//const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
