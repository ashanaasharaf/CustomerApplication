# Customerapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Explanation about the project

Customer Management Application is a web application built with Angular 18 that helps users manage their customer details efficiently. It provides features like creation,updation,deletion,listing,Pagiantion.

## Feature of the application

*For Design Purpose Angular Material version 18 is used
*Pagination feature is implemented in these project
*matSnackbar feature is used to provide feedback to the user for operations liker adding or deleting a  customer and for any errors that occur during API requests.
*Interceptor are used for error handling.
*implement layloading with stanalone component to make application more easier.
*Make Page responsive

## Prerequisites

The prerequisites for running the project, such as Node.js and Angular CLI versions.
*Node.js >=  20.11.0
*Angular CLI >=  18.2.2

## Installation

 step-by-step instructions to set up the project locally.
*Clone the repository
*Navigate to the project directory:cd project-name
*Install dependencies:npm install
*Run the development server:ng serve
*Open your browser and go to `http://localhost:4200`

## Usage

how to use the application once it’s up and running.

*Navigate to the main page of the Application.
*The main page is the listing page of the customer management application
*In that listing page each data contain edit and delete icon.
*On clicking edit icon,redirect to edit page where updation can be done.
*On clicking delete icon,the data will be deleted from the list.(On relaoding the page data will seen due to the limitation of api)
*On listing page,there is navigation bar which contain list and add option.
*on clicking add option,redirect to add page where creation can be done.
*On clicking list option,the listing of customer can be seen.

"# CustomerApplication" 
