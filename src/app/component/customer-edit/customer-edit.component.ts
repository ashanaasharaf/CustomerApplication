import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerApiService } from '../../services/customer-services/customer-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { editCustomer } from '../../common/model/editcustomer';

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.css'
})
export class CustomerEditComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  myForm: FormGroup;
  queryParam: any;

  constructor(private fb: FormBuilder, private customerService: CustomerApiService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.queryParam = this.route.snapshot.paramMap.get('id');
    this.customerDetail();
    this.myForm = this.fb.group({
      id: [Number(this.queryParam)],
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


  /* function for populate the value from the customerdetailapi in the form*/
  customerDetail() {
    this.customerService.getCustomerById(this.queryParam).subscribe(data => {
      this.myForm.patchValue({
        name: data.name,
        username: data.username,
        email: data.email,
        website: data.website,
        phone: data.phone,
        address: {
          street: data.address.street,
          city: data.address.city,
          suite: data.address.suite,
          zip: data.address.zipcode,
          geo: {
            lat: data.address.geo.lat,
            lng: data.address.geo.lng,
          }
        },
        company: {
          catchPhrase: data.company.catchPhrase,
          bs: data.company.bs,
          name: data.company.name
        }

      })
    });
  }

  /* function for update the customer data*/
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
        this._snackBar.open('Customer has been Edited', ' X', {
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
