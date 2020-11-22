import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StreamState } from './stream-state';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private state: StreamState = {
    playing: false,
    paused: false,
    error: false,
  };
  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);
  /* Some required variables which will be used by YT API*/
  private YT: any;
  private player: any;
  private isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  /* Initialize method for YT IFrame API */
  init(id: string) {
    // Return if Player is already created
    // tslint:disable-next-line: no-string-literal
    if (window['YT']) {
      this.startVideo(id);
      return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
    // tslint:disable-next-line: no-string-literal
    window['onYouTubeIframeAPIReady'] = () => this.startVideo(id);
  }

  private startVideo(id: string) {
    // tslint:disable-next-line: no-string-literal
    this.player = new window['YT'].Player('player', {
      videoId: id,
      height: '90%',
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
        onError: this.onPlayerError.bind(this),
        onReady: this.onPlayerReady.bind(this),
      }
    });
  }

  /* It will be called when the Video Player is ready */
  private onPlayerReady(event) {
    // if (this.isRestricted) {
    //   event.target.mute();
    //   event.target.playVideo();
    // } else {
    //   event.target.playVideo();
    // }
    event.target.playVideo();
  }

  /* API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  private onPlayerStateChange(event) {
    switch (event.data) {
      // tslint:disable-next-line: no-string-literal
      case window['YT'].PlayerState.PLAYING:
        this.state.playing = true;
        this.state.paused = false;
        break;
      // tslint:disable-next-line: no-string-literal
      case window['YT'].PlayerState.PAUSED:
        this.state.playing = false;
        this.state.paused = true;
        break;
      // tslint:disable-next-line: no-string-literal
      case window['YT'].PlayerState.ENDED:
        this.resetState();
        break;
    }
    this.stateChange.next(this.state);
  }

  private onPlayerError(error) {
    console.error(error);
    this.resetState();
    this.stateChange.next(this.state);
  }

  private resetState() {
    this.state = {
      playing: false,
      paused: false,
      error: false
    };
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

  play() {
    this.player.playVideo();
  }

  pause() {
    this.player.pauseVideo();
  }

  stop() {
    this.resetState();
    this.stateChange.next(this.state);
    this.player.stopVideo();
  }

}
