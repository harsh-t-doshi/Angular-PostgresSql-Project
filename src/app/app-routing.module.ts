import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { AboutComponent } from "./about/about.component";
import { FormsComponent } from "./forms/forms.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "statistics", component: StatisticsComponent },
  { path: "about", component: AboutComponent },
  { path: "forms", component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
