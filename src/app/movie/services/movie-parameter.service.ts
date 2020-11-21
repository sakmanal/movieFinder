import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieParameterService {
  filterByTitle = '';
  category = 'All';
  orderBy = 'Most Popular';
  displayView = 'list';

  removeFilters(): void {
    this.filterByTitle = '';
    this.category = 'All';
    this.orderBy = 'Most Popular';
  }
}
