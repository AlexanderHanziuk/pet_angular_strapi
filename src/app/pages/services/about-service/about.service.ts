import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MAIN_URL } from '../../constants/main-url';
import { ENDPOINTS } from '../../constants/endpoints';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private readonly ABOUT_URL = `${MAIN_URL}${ENDPOINTS.aboutSection.about}`;

  constructor(private readonly http: HttpClient) {}

  public getAboutTitle(): Observable<HttpResponse<Object>> {
    return this.http.get(this.ABOUT_URL, { observe: 'response' });
  }
}
