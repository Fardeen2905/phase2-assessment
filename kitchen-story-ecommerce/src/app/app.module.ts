import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { PasswordMatchDirective } from './_validators';
import { CartComponent } from './cart/cart.component';
import { FooditemsService } from './services/fooditems.service';
import { UsersService } from './services/users.service';
import { AdminService } from './services/admin.service';
import { SuccessComponent } from './success/success.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodUpdateComponent } from './food-update/food-update.component';

@NgModule({
  declarations: [
   
    MainComponent,
        LandingpageComponent,
        HomeComponent,
        LoginComponent,
        OrderComponent,
        RegisterComponent,
        PasswordMatchDirective,
        CartComponent,
        SuccessComponent,
        CheckoutComponent,
        FoodAddComponent,
        FoodDetailsComponent,
        FoodListComponent,
        FoodUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FooditemsService, UsersService, AdminService],
  bootstrap: [MainComponent]
})
export class AppModule { }
