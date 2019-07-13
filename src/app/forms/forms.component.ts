import { Component, OnInit } from "@angular/core";
import { FormsService } from "./forms.service";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  dealers: Object;

  error = 0;
  public driverID;
  public vehicleID;
  constructor(private formService: FormsService) {}
  insertDriverData(driverID, vehicleID) {
    this.driverID = driverID;
    this.vehicleID = vehicleID;
    if (this.driverID && this.vehicleID) {
      this.formService
        .postAPIData(this.driverID, this.vehicleID)
        .subscribe(response => {
          console.log(response);
        });
    } else {
      this.error = 1;
      alert("Enter Valid Data");
      console.log("Invalid Data!");
    }
    this.formService.getAPIData().subscribe(response => {
      this.dealers = response["reslt"];
    });
  }
  ngOnInit() {
    this.formService.getAPIData().subscribe(response => {
      this.dealers = response["reslt"];
    });
  }
}
