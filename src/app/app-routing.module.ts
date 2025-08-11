import {FruitTableComponent} from './fruit-challenge/components/fruit-table/fruit-table.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {FruitDetailDialogComponent} from './fruit-challenge/components/fruit-detail-dialog/fruit-detail-dialog.component';

import {MessagingComponent} from './messaging-challenge/components/messaging/messaging.component';

const routes: Routes = [
  {
    path: 'fruit-table',
    component: FruitTableComponent,
  },
  {
    path: 'messaging',
    component: MessagingComponent
  },
  {
    path: '**',
    redirectTo: 'fruit-table',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  declarations: [
    FruitTableComponent,
    FruitDetailDialogComponent
  ]
})
export class AppRoutingModule {
}
