import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FormsService {
  constructor(private http: HttpClient) {}

  getAPIData() {
    return this.http.get("/api/getData");
  }

  postAPIData(dID, vID) {
    return this.http.post("/api/postData", {
      driverId: dID,
      vehicleId: vID
    });
  }
}
