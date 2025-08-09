import { Component, OnInit } from '@angular/core';
import {FruitTableViewModel} from './fruit-table-view-model';
import {MatDialog} from '@angular/material/dialog';
import {FruitDetailDialogComponent} from '../fruit-detail-dialog/fruit-detail-dialog.component';
import {Fruit} from '../../models/fruit';

@Component({
  selector: 'app-fruit-table',
  templateUrl: './fruit-table.component.html',
  styleUrls: ['./fruit-table.component.scss'],
  providers: [FruitTableViewModel]
})
export class FruitTableComponent implements OnInit {
  columnsToDisplay = ['id', 'name', 'genus', 'family', 'order', 'calories', 'carbohydrates', 'sugar'];

  constructor(public viewModel: FruitTableViewModel, private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openFruitDetails(fruit: Fruit): void {
    const dialogRef = this.dialog.open(FruitDetailDialogComponent, {
      data: fruit
    });
  }
}
