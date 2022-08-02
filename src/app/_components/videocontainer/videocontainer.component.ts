import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from '../../_services/common.service';
import Player from '@vimeo/player';
import { Video } from 'src/_models/video';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-videocontainer',
  templateUrl: './videocontainer.component.html',
  styleUrls: ['./videocontainer.component.css'],
})
export class VideocontainerComponent implements OnInit {
  videos: any;
  constructor(public commonService: CommonService) {}

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
    console.log(this.videos);
    Object.keys(this.videos).forEach((element) => {
      const title = document.createElement('h3');
      title.innerHTML = this.videos[element].title;
      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', this.videos[element].videoUrl);
      iframe.setAttribute('width', '400');
      iframe.setAttribute('height', '300');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '1');
      iframe.setAttribute('allow', 'autoplay; fullscreen');
      container.appendChild(iframe);
    });
    // let player = new Player(iframe);
    // player.on('play', () => {
    //   this.videos.required = false;
    // });
    // console.log(this.videos);
    // container.appendChild(title);
    // container.appendChild(author);
    // container.appendChild(iframe);
  }
}
