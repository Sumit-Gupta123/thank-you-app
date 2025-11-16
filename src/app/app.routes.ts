// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component'; // 1. Import it

export const routes: Routes = [
  // 2. Add the new route
  { path: 'thank-you', component: ThankYouComponent },

  // You can also add a "home" route later if you want
  // { path: '', component: HomeComponent }
];
