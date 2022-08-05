import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from '../../_services/common.service';
import Player from '@vimeo/player';
import { Video } from 'src/_models/video';
import { Router } from '@angular/router';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-videocontainer',
  templateUrl: './videocontainer.component.html',
  styleUrls: ['./videocontainer.component.css'],
})
export class VideocontainerComponent implements OnInit {
  videos: any;
  playerUrl = 'http://player.vimeo.com/video/';
  constructor(public commonService: CommonService, private router: Router) {}

  @ViewChild('framecontainer') frameContainer!: ElementRef;

  ngOnInit(): void {
    this.videoInfo();
  }

  ngAfterViewInit(): void {}

  videoInfo() {
    this.commonService.videoInfo().subscribe((data) => {
      this.videos = data;
      this.videos = {
        ...this.videos,
      };
      this.injectFrame();
    });
  }

  injectFrame() {
    const container = this.frameContainer?.nativeElement;
    // console.log(this.videos);
    Object.keys(this.videos).forEach((element) => {
      const title = document.createElement('h3');
      title.innerHTML = this.videos[element].title;
      const iframe = document.createElement('iframe');
      iframe.setAttribute(
        'src',
        this.playerUrl + this.videos[element].videoUrl.substring(18)
      );
      iframe.setAttribute('width', '400');
      iframe.setAttribute('height', '300');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '1');
      iframe.setAttribute('allow', 'autoplay; fullscreen');
      iframe.setAttribute('id', element);

      let player = new Player(iframe);
      player.on('play', () => {
        this.videos[element].isRequired = false;
      });
      container.appendChild(iframe);
    });
  }

  validate() {
    // console.log(this.videos);
    let message = 'Please watch listed videos';
    let flag = false;
    Object.keys(this.videos).forEach((element) => {
      if (this.videos[element].isRequired) {
        message = message + '\n - ' + this.videos[element].title + '';
        flag = true;
      }
    });

    if (flag) {
      alert(message);
    } else {
      this.router.navigate(['/end']);
    }
  }
}
