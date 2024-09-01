import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CustomerApiService } from '../../services/customer-services/customer-api.service';
import { HeaderComponent } from '../../common/view/header/header.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule, MatPaginatorModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
  providers: [CustomerApiService]
})
export class CustomerListComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);

  displayedColumns: string[] = ['name', 'email', 'address', 'company', 'website', 'actions'];
  customers: any[] = [];
  dataSource = new MatTableDataSource([]);

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private customerService: CustomerApiService, private route: Router) { }
  ngOnInit(): void {
    this.loadCustomers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /*function to list the customer details*/
  loadCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (res: any) => {
        this.dataSource.data = res;
      },
      error: (err) => this._snackBar.open('Internal server error', ' X', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      })
    });
  }

  /*navigation for edit page*/
  editCustomer(id: any) {
    this.route.navigate(['/customer/edit/', id])
  }

  /* function to delete the customer form customer list*/
  deleteCustomer(id: any) {
    this.customerService.deleteCustomer(id).subscribe({
      next: (res: any) => {
        this.dataSource.data = this.dataSource.data.filter(c => c.id !== id);
        this._snackBar.open('Customer has been removed', ' X', {
          horizontalPosition: 'right',
          verticalPosition: 'bottom',
        });
      },
      error: (err) => this._snackBar.open('Internal server error', ' X', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      })
    });

  }

}
