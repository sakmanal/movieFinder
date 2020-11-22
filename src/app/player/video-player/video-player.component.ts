import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { PlayerService } from '../player.service';
import { StreamState } from '../stream-state';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoPlayerComponent implements OnInit {

  state$: Observable<StreamState> =  this.playerService.getState().pipe(
    // bug fix - change detection not working after page reload🤔
    tap(state => this.cdr.detectChanges())
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const videoID = params.ytId;
        this.playerService.init(videoID);
      });
  }

  pause() {
    this.playerService.pause();
  }

  play() {
    this.playerService.play();
  }

  stop() {
    this.playerService.stop();
    this.router.navigate(['/movies']);
  }

}
