import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  /* 1. Some required variables which will be used by YT API*/
  private YT: any;
  private videoID: any;
  private player: any;

  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.videoID = params.ytId;
      });
    this.init();
  }

    /* 2. Initialize method for YT IFrame API */
    private init() {
      // Return if Player is already created
      // tslint:disable-next-line: no-string-literal
      if (window['YT']) {
        this.startVideo();
        return;
      }

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
      // tslint:disable-next-line: no-string-literal
      window['onYouTubeIframeAPIReady'] = () => this.startVideo();
    }

  private startVideo() {
    // tslint:disable-next-line: no-string-literal
    this.player = new window['YT'].Player('player', {
      videoId: this.videoID,
      height: '700px',
      width: '100%',
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        controls: 1,
        rel: 0,
        fs: 1,
        playsinline: 0

      },
      events: {
        onStateChange: this.onPlayerStateChange.bind(this),
        // onError: this.onPlayerError.bind(this),
        onReady: this.onPlayerReady.bind(this),
      }
    });
  }

  /* 4. It will be called when the Video Player is ready */
  private onPlayerReady(event) {
    if (this.isRestricted) {
      event.target.mute();
      event.target.playVideo();
    } else {
      event.target.playVideo();
    }
  }

  /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  private onPlayerStateChange(event) {
    switch (event.data) {
      // tslint:disable-next-line: no-string-literal
      case window['YT'].PlayerState.PLAYING:
        break;
      // tslint:disable-next-line: no-string-literal
      case window['YT'].PlayerState.PAUSED:
        break;
      // tslint:disable-next-line: no-string-literal
      case window['YT'].PlayerState.ENDED:
        break;
    }
  }

  private onPlayerError(error) {
    console.error(error);
  }

}
