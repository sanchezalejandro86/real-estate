import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatStepperModule,
  MatToolbarModule,
  MatListModule,
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatListModule,
  ],
  declarations: []
})
export class SharedModule {
}
