import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-notification-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, MatDialogClose],
  templateUrl: './notification-dialog.html',
  styleUrl: './notification-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationDialog {
  readonly data = inject(MAT_DIALOG_DATA);
  title: string = this.data.title;
  message: string = this.data.message;
}
