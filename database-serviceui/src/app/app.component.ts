import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  backendUrl = 'http://localhost:3000';
  // two way binding to ui inputs
  responseSuccessChecked = false;
  correctResponseChecked = false;
  responseTime = 5000;
  cpuUtilizationLoad = 60;

  createMessage(): JSON {
    const message = '{"responseSuccessChecked" : "'
      + this.responseSuccessChecked + '", "correctResponseChecked" : "'
      + this.correctResponseChecked + '", "responseTime" : "'
      + this.responseTime + '", "cpuUtilizationLoad" : "'
      + this.cpuUtilizationLoad + '" }';
    return JSON.parse(message);
  }

  saveConfig() {
    this.http.post(this.backendUrl, this.createMessage()).subscribe(
      res => console.log(`Report sent to monitor at ${this.backendUrl}`),
      err => console.log(`Monitor at ${this.backendUrl} not available`),
    );
  }
}
