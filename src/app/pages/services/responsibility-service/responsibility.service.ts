import { Injectable } from '@angular/core';
import { MAIN_URL } from '../../constants/main-url';
import { ENDPOINTS } from '../../constants/endpoints';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResponsibilityService {
  private readonly RESPONSIBILITY_URL = `${MAIN_URL}${ENDPOINTS.educationSection.responsibility}`;

  constructor(private readonly http: HttpClient) {}

  public getResponsibilityData(): Observable<HttpResponse<Object>> {
    return this.http.get(this.RESPONSIBILITY_URL, { observe: 'response' });
  }
}
