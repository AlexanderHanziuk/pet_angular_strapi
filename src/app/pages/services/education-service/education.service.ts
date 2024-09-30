import { Injectable } from '@angular/core';
import { MAIN_URL } from '../../constants/main-url';
import { ENDPOINTS } from '../../constants/endpoints';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private readonly EDUCATION_URL = `${MAIN_URL}${ENDPOINTS.educationSection.education}`;

  constructor(private readonly http: HttpClient) {}

  public getEducationData(): Observable<HttpResponse<Object>> {
    return this.http.get(this.EDUCATION_URL, { observe: 'response' });
  }
}
