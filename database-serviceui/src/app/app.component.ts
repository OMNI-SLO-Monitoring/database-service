import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * component for sending the changes made in the UI to the backend
 */
export class AppComponent {

  constructor(private http: HttpClient) { }

  backendUrl = environment.BACKEND_DB_SERVICE_URL + 'response-modification';
  // two way binding to ui inputs
  responseSuccessChecked = true;
  correctResponseChecked = true;
  responseTime = 5000;
  cpuUtilizationLoad = 60;

  /**
   * Creates the Json that can be send to the backend depending on the
   * input at the frontend
   * 
   * @returns the error message json that was created 
   */
  createMessage() {
    const message = {
      responseSuccessChecked: this.responseSuccessChecked,
      correctResponseChecked: this.correctResponseChecked,
      responseTime: this.responseTime,
      cpuUtilizationLoad: this.cpuUtilizationLoad
    };
    return message;
  }

  /**
   * Sends the inputs of the frontend via a JSON to the backend
   */
  saveConfig() {
    this.http.post(this.backendUrl, this.createMessage()).subscribe(
      res => console.log(`Report sent to backend at ${this.backendUrl}`),
      err => console.log(`Backend at ${this.backendUrl} not available`),
    );
  }
}
