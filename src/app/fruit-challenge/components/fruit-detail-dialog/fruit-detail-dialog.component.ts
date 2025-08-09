import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Fruit} from '../../models/fruit';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-fruit-detail-dialog',
  templateUrl: './fruit-detail-dialog.component.html',
  styleUrls: ['./fruit-detail-dialog.component.scss']
})
export class FruitDetailDialogComponent {
  fruit$: Observable<Fruit>;

  constructor(
    public dialogRef: MatDialogRef<FruitDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fruit
  ) {
    this.fruit$ = of(data);
  }

  close(): void {
    this.dialogRef.close();
  }
}
