import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private readonly ABOUT_URL = 'http://localhost:1337/api/about';

  constructor(private readonly http: HttpClient) {}

  public getAboutTitle(): Observable<HttpResponse<Object>> {
    return this.http.get(this.ABOUT_URL, { observe: 'response' });
  }
}
