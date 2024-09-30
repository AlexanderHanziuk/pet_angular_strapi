import { Injectable } from '@angular/core';
import { MAIN_URL } from '../../constants/main-url';
import { ENDPOINTS } from '../../constants/endpoints';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutModalService {
  private readonly ABOUT_MODAL_URL = `${MAIN_URL}${ENDPOINTS.aboutSection.aboutModal}`;

  constructor(private readonly http: HttpClient) {}

  public getAboutModalData(): Observable<HttpResponse<Object>> {
    return this.http.get(this.ABOUT_MODAL_URL, { observe: 'response' });
  }
}
