import { NgModule } from '@angular/core';

import { MatButtonModule, MatToolbarModule, MatFormFieldModule,
         MatInputModule, MatIconModule, MatProgressBarModule,
         MatSidenavModule, MatTooltipModule, MatPaginatorModule, MatDividerModule,
         MatChipsModule, MatSlideToggleModule, MatSliderModule, MatMenuModule,
         MatCheckboxModule, MatSelectModule, MatExpansionModule, MatCardModule,
         MatTableModule, MatButtonToggleModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [  MatButtonModule, MatToolbarModule, MatPaginatorModule, MatFormFieldModule,
              MatInputModule, MatIconModule, MatExpansionModule, MatProgressBarModule,
              MatSidenavModule, MatTooltipModule, MatChipsModule, MatMenuModule,
              MatSlideToggleModule, MatSliderModule, MatCheckboxModule, MatCardModule,
              MatSelectModule, MatTableModule, MatButtonToggleModule, MatSnackBarModule,
              MatDividerModule ],

    exports: [  MatButtonModule, MatToolbarModule, MatPaginatorModule, MatFormFieldModule,
                MatInputModule, MatIconModule, MatExpansionModule, MatProgressBarModule,
                MatSidenavModule, MatTooltipModule, MatChipsModule, MatMenuModule,
                MatSlideToggleModule, MatSliderModule, MatCheckboxModule, MatCardModule,
                MatSelectModule,  MatTableModule, MatButtonToggleModule, MatSnackBarModule,
                MatDividerModule ]
})
export class MaterialModule { }
