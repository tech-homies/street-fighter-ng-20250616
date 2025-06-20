import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-character-dialog',
  imports: [
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatFormField,
    MatLabel,
    MatFormField,
    MatInput,
    JsonPipe,
    MatError,
  ],
  templateUrl: './add-character-dialog.html',
  styleUrl: './add-character-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterDialog {
  readonly dialogRef = inject(MatDialogRef<AddCharacterDialog>);

  #fb = new FormBuilder();
  protected addCharacterForm = this.#fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    stamina: [1000, [Validators.required, Validators.min(800)]],
    stun: [1000, [Validators.required, Validators.max(1200)]],
    country: ['', [Validators.required]],
    order: [1, [Validators.required]],
  });

  constructor() {
    let user = { name: 'John', age: 30 };
    user.age = 31;
    user = { ...user, age: 32 };
  }

  // protected addCharacterForm = new FormGroup({
  //   name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
  //   stamina: new FormControl(1000, { nonNullable: true, validators: [Validators.required, Validators.min(800)] }),
  //   stun: new FormControl(1000, { nonNullable: true, validators: [Validators.required, Validators.max(1200)] }),
  //   country: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  //   order: new FormControl(1, { nonNullable: true, validators: [Validators.required] }),
  // });

  protected saveCharacter() {
    this.dialogRef.close(this.addCharacterForm.value);
  }
}
