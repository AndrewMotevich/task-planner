import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterService } from '../../../shared/services/filter.service';
import { FilterOptions } from 'src/app/shared/enums/filter-options.enum';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          width: '15rem',
        })
      ),
      state(
        'closed',
        style({
          width: '5rem',
        })
      ),
      transition('open <=> closed', [animate('1s')]),
    ]),
  ],
})
export class SideBarComponent {
  public isSidebarOpen = true;
  public isOverdueTasks = false;
  public isCompletedTasks = false;

  constructor(private filterService: FilterService) {}

  public toggleOverdueTasks(): void {
    this.isOverdueTasks = !this.isOverdueTasks;

    if (this.isOverdueTasks) {
      this.filterService.setFilter(FilterOptions.overdue);
    } else {
      this.filterService.unsetFilter(FilterOptions.overdue);
    }
  }

  public toggleCompletedTasks() {
    this.isCompletedTasks = !this.isCompletedTasks;

    if (this.isCompletedTasks) {
      this.filterService.setFilter(FilterOptions.completed);
    } else {
      this.filterService.unsetFilter(FilterOptions.completed);
    }
  }

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
