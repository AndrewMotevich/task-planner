import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterOptions } from 'src/app/shared/enums/filter-options.enum';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private filterOption = FilterOptions.default;
  private filterObservableSubject = new BehaviorSubject<FilterOptions>(this.filterOption);

  public get filter$(): Observable<FilterOptions> {
    return this.filterObservableSubject.asObservable();
  }

  public setFilter(filter: FilterOptions) {
    this.filterOption += filter;
    this.filterObservableSubject.next(this.filterOption);
  }

  public unsetFilter(filter: FilterOptions) {
    this.filterOption -= filter;
    this.filterObservableSubject.next(this.filterOption);
  }
}
