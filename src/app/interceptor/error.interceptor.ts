import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle the error from server with status code such as 404 or 500.
      snackBar.open('error occurred:' + error,' X', {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
      return throwError(error);
    })
  );
};