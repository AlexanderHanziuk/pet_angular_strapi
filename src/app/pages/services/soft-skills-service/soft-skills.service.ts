import { Injectable } from '@angular/core';
import { MAIN_URL } from '../../constants/main-url';
import { ENDPOINTS } from '../../constants/endpoints';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillsService {
  private readonly SOFT_SKILLS_URL = `${MAIN_URL}${ENDPOINTS.skillsSection.softSkills}`;

  constructor(private readonly http: HttpClient) {}

  public getSoftSkillsData(): Observable<HttpResponse<Object>> {
    return this.http.get(this.SOFT_SKILLS_URL, { observe: 'response' });
  }
}
