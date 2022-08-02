import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from 'src/_models/video';
import { url } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  // getVideos() {
  //   return this.http.get(
  //     'https://api.vimeo.com/users/user181519527/albums/9717425'
  //   );
  // }

  // getInfo() {
  //   return this.http.get('https://api.vimeo.com/users/user181519527');
  // }

  videoInfo() {
    return this.http.get<Video[]>(url + '/common');
  }
}
