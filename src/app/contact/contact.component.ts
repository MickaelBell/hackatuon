import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
<<<<<<< HEAD
=======

>>>>>>> 3e39a1ebb67b912a420d7979289588f5af570f49
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm;

  constructor( private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
<<<<<<< HEAD
      firstName: ' ',
=======
      name: ' ',
>>>>>>> 3e39a1ebb67b912a420d7979289588f5af570f49
      email: ' ',
      message: ' ',
    });
   }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  // tslint:disable-next-line:typedef
  sendContact(contactData) {
    console.log(contactData);
    alert('Your crow is off to a good go');
=======
  sendContact(contactData) {
    console.log(contactData);
>>>>>>> 3e39a1ebb67b912a420d7979289588f5af570f49
  }
}
