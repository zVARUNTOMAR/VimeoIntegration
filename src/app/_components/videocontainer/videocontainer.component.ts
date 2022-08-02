import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from '../../_services/common.service';
import Player from '@vimeo/player';
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
        required: true,
      };
      this.injectFrame();
    });
  }

  injectFrame() {
    const container = this.frameContainer?.nativeElement;
    const title = document.createElement('h3');
    const author = document.createElement('p');
    author.innerHTML = this.videos.user.name;
    title.innerHTML = this.videos?.name;
    // title.classList.add('heading');
    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('src', this.videos?.player_embed_url);
    iframe.setAttribute('width', '600');
    iframe.setAttribute('height', '400');
    iframe.setAttribute('frameBorder', '0');
    let player = new Player(iframe);
    player.on('play', () => {
      this.videos.required = false;
    });
    // console.log(this.videos);
    container.appendChild(title);
    container.appendChild(author);
    container.appendChild(iframe);
  }
}
