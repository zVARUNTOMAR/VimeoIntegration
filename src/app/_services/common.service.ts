import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  getVideos() {
    return this.http.get(
      'https://api.vimeo.com/users/user181519527/albums/9717425'
    );
  }

  getInfo() {
    return this.http.get('https://api.vimeo.com/users/user181519527');
  }

  videoInfo() {
    return this.http.get('https://api.vimeo.com/videos/734726131');
  }
}
