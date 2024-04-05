import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'reactive-form';
  formSubmitted = false;
  constructor(private _fb:FormBuilder){}

  form!:FormGroup;
  ngOnInit(): void {
    this.form = this._fb.group({
      bookname: ['', [Validators.required]],
      author: ['',Validators.required],
      publication: ['',Validators.required],
      price: ['',Validators.required],
      genre: ['',Validators.required],
      publishedDate: ['',Validators.required],
      country: ['',Validators.required],
      description: ['',Validators.required],
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
      
      const formValue = this.form.value;
      const alertMessage = `
        Book Name: ${formValue.bookname}
        Author: ${formValue.author}
        Publication: ${formValue.publication}
        Price: ${formValue.price}
        Genre: ${formValue.genre}
        Published Date: ${formValue.publishedDate}
        Country: ${formValue.country}
        Description: ${formValue.description}
      `;
      alert(alertMessage);
    } else {
     
      this.form.markAllAsTouched();
    }
  }
 
}

