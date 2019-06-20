import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDealers(dealer) {
    const url = `http://localhost:4200/dealer/${dealer}/moxi_stats`;
    return this.http.get(url);
  }
}
