import { Injectable } from '@angular/core';
import { MAIN_URL } from '../../constants/main-url';
import { ENDPOINTS } from '../../constants/endpoints';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private readonly EXPERIENCE_URL = `${MAIN_URL}${ENDPOINTS.educationSection.experience}`;

  constructor(private readonly http: HttpClient) {}

  public getExperienceData(): Observable<HttpResponse<Object>> {
    return this.http.get(this.EXPERIENCE_URL, { observe: 'response' });
  }
}
