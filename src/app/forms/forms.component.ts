import { Component, OnInit } from "@angular/core";
import { FormsService } from "./forms.service";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  public driverID;
  public vehicleID;
  error = 0;
  constructor(private formService: FormsService) {}
  insertDriverData(driverID, vehicleID) {
    this.error = 0;
    this.driverID = driverID;
    this.vehicleID = vehicleID;
    this.formService.postAPIData(this.driverID, this.vehicleID).subscribe(
      response => {
        console.log("response from post data is ", response);
      },
      error => {
        console.log("error during post is ", error);
      }
    );
  }
  ngOnInit() {
    console.log();
    this.formService.postAPIData(this.driverID, this.vehicleID).subscribe(
      response => {
        console.log("response is ", response);
      },
      error => {
        console.log("error is ", error);
      }
    );
  }
}
