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
  MatProgressSpinnerModule,
  MatListModule
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
    MatProgressSpinnerModule,
    MatListModule
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
    MatProgressSpinnerModule,
    MatListModule
  ],
})
export class MaterialModule {}
