import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AcomponentComponent } from './acomponent/acomponent.component';
import { BcomponentComponent } from './bcomponent/bcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailsComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    NewsComponent,
    NewsDetailsComponent,
    MobilesComponent,
    MobileDetailsComponent,
    HeaderComponent,
    HomeComponent,
    AcomponentComponent,
    BcomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '',component : HomeComponent},
      { path : 'cars',component : CarsComponent},
      { path : 'recipes',component : RecipeComponent},
      { path : 'mobile',component : MobilesComponent},
      { path : 'news' , component : NewsComponent},
      { path : 'a',component : AcomponentComponent},
      { path : 'b' , component : BcomponentComponent}
    ]),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
