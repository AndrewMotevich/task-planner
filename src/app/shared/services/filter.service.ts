import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

enum FilterOptions {
  default,
  completed,
  overdue,
  both,
}

@Injectable({ providedIn: 'root' })
export class FilterService {
  private filterOption = FilterOptions.default
  private filterObservableSubject = new BehaviorSubject<FilterOptions>(
    FilterOptions.default
  );

  public get filter$(): Observable<FilterOptions> {
    return this.filterObservableSubject.asObservable();
  }

  public setFilter(filter: FilterOptions){
    this.filterOption += filter;
    this.filterObservableSubject.next(this.filterOption);
  }

  public unsetFilter(filter: FilterOptions){
    this.filterOption -= filter;
    this.filterObservableSubject.next(this.filterOption);
  }
}
