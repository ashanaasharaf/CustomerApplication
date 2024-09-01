import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { errorInterceptor } from './app/interceptor/error.interceptor';

bootstrapApplication(AppComponent,{providers: [provideRouter(routes),provideHttpClient(withInterceptors([errorInterceptor])),
    provideAnimations()]})
.catch((err) => console.error(err));
