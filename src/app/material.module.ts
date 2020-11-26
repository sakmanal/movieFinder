import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatSidenavModule,
  MatTooltipModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSelectModule,
  MatExpansionModule,
  MatCardModule,
  MatDividerModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTooltipModule,
    MatChipsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],

  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTooltipModule,
    MatChipsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule {}
