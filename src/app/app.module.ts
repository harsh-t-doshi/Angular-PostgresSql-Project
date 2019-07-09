import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { AboutComponent } from './about/about.component';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    StatisticsComponent,
    AboutComponent,
    FormsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
