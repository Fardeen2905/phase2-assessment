import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { AuthguardService } from './services/authguard.service';
import { OrderComponent } from './order/order.component';
import { SuccessComponent } from './success/success.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodUpdateComponent } from './food-update/food-update.component';
import { FoodListComponent } from './food-list/food-list.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent,canActivate:[AuthguardService]},
  {path: 'order', component: OrderComponent, canActivate: [AuthguardService] },
  {path:'landingpage',component:LandingpageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthguardService]},
  {path:'success',component:SuccessComponent},
  {path:'checkout',component:CheckoutComponent},
  { path: 'food-list', component: FoodListComponent,canActivate:[AuthguardService] },
  {path:'food-add',component:FoodAddComponent,canActivate:[AuthguardService]},
  {path:'food-details',component: FoodDetailsComponent,canActivate:[AuthguardService] },
  {path:'food-details/:id',component: FoodDetailsComponent },
  {path:'food-update',component: FoodUpdateComponent,canActivate:[AuthguardService]},
  {path:'food-update/:id',component: FoodUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
