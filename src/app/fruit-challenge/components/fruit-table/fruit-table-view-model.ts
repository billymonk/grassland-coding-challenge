import {Injectable} from '@angular/core';
import {FruityViceService} from '../../services/fruity-vice-service';
import {BehaviorSubject, combineLatest} from 'rxjs';
import {Fruit} from '../../models/fruit';
import {map, startWith, shareReplay, tap} from 'rxjs/operators';

type SortOptions = 'name-asc' | 'name-desc' | 'carbs-asc' | 'carbs-desc';

@Injectable()
export class FruitTableViewModel {

  loadingFruit$ = new BehaviorSubject<boolean>(false);
  filter$ = new BehaviorSubject<string>('');
  sort$ = new BehaviorSubject<SortOptions>('name-asc');
  sortOptions = [
    { value: 'name-asc', viewValue: 'Name Ascending' },
    { value: 'name-desc', viewValue: 'Name Descending' },
    { value: 'carbs-asc', viewValue: 'Carbohydrates Ascending' },
    { value: 'carbs-desc', viewValue: 'Carbohydrates Descending' },
  ];

  fruitData$ = combineLatest([
    this.filter$,
    this.sort$,
    this.fruitService.getAllFruits().pipe(
      tap(() => this.loadingFruit$.next(false)),
      shareReplay(1),
      startWith([])
    ),
  ]).pipe(
    map(([filter, sort, allFruit]) => {
      const filteredFruit = allFruit.filter(fruit =>
        fruit.name.toLowerCase().includes(filter.toLowerCase()) ||
        fruit.genus.toLowerCase().includes(filter.toLowerCase()) ||
        fruit.family.toLowerCase().includes(filter.toLowerCase()) ||
        fruit.order.toLowerCase().includes(filter.toLowerCase())
      );

      return filteredFruit.sort((a, b) => {
        switch (sort) {
          case 'name-asc': return a.name.localeCompare(b.name);
          case 'name-desc': return b.name.localeCompare(a.name);
          case 'carbs-asc': return a.nutritions.carbohydrates - b.nutritions.carbohydrates;
          case 'carbs-desc': return b.nutritions.carbohydrates - a.nutritions.carbohydrates;
        }
      });
    })
  );

  constructor(private fruitService: FruityViceService) {
    this.loadingFruit$.next(true);
  }

  filterFruit(event: Event): void {
    this.filter$.next((event.target as HTMLInputElement).value);
  }

  sortFruit(sortOption: SortOptions): void {
    this.sort$.next(sortOption);
  }
}
