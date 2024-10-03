import { Injectable } from '@angular/core';
import { MAIN_URL } from '../../constants/main-url';
import { ENDPOINTS } from '../../constants/endpoints';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HardSkillsService {
  private readonly HARD_SKILLS_URL = `${MAIN_URL}${ENDPOINTS.skillsSection.hardSkills}`;

  constructor(private readonly http: HttpClient) {}

  public getHardSkillsData(): Observable<HttpResponse<Object>> {
    return this.http.get(this.HARD_SKILLS_URL, { observe: 'response' });
  }
}
