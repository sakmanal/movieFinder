import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: ':ytId', component: VideoPlayerComponent}]),
    MaterialModule
  ]
})
export class PlayerModule { }
