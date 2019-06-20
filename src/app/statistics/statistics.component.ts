import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.css"]
})
export class StatisticsComponent implements OnInit {
  public dealer = `cortlandcdj`;
  dealers: Object;
  error = 0;
  constructor(private data: DataService) {}
  changeLabelName(lbl, val) {
    this.error = 0;
    this.dealer = val;
    this.data.getDealers(this.dealer).subscribe(
      data => {
        this.dealers = data;
        console.log(this.dealers);
      },
      error => {
        this.error = 1;
        console.log("error");
      }
    );
  }
  ngOnInit() {
    console.log(this.dealer);
    this.data.getDealers(this.dealer).subscribe(data => {
      this.dealers = data;
      console.log(this.dealers);
    });
  }
}
