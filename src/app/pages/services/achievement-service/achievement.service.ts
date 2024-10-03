import { Injectable } from '@angular/core';
import { MAIN_URL } from '../../constants/main-url';
import { ENDPOINTS } from '../../constants/endpoints';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  private readonly ACHIEVEMENT_URL = `${MAIN_URL}${ENDPOINTS.educationSection.achievement}`;

  constructor(private readonly http: HttpClient) {}

  public getAchievementData(): Observable<HttpResponse<Object>> {
    return this.http.get(this.ACHIEVEMENT_URL, { observe: 'response' });
  }
}
