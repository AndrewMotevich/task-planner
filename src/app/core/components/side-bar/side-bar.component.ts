import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
    ])],
})
export class SideBarComponent {
  public isSidebarOpen = true;
  public overdueTasks = false;
  public completedTasks = false;

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
