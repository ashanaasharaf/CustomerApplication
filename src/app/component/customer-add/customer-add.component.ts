import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerApiService } from '../../services/customer-services/customer-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent {
  private _snackBar = inject(MatSnackBar);
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private customerService: CustomerApiService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: [''],
        suite: [''],
        zip: [''],
        geo: this.fb.group({
          lat: ['', Validators.required],
          lng: ['', Validators.required]
        })
      }),
      company: this.fb.group({
        catchPhrase: ['', Validators.required],
        name: ['', Validators.required],
        bs: ['', Validators.required]
      }),
    });
  }


  /*function for creating the customer */
  onSubmit(form: FormGroup) {
    if (form.invalid) {
      this._snackBar.open('Invalid data!! Plz enter valid data', ' X', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
      return;
    }
    this.customerService.addCustomer(form.value).subscribe({
      next: (res: any) => {
        this._snackBar.open('Customer has been created', ' X', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
        this.router.navigate(['/customer/list'])
      },
      error: (err) => this._snackBar.open('Internal server error', ' X', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      })
    });
  }
}
