import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskFormComponent } from 'src/app/planner/components/task-form/task-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private modalService: NgbModal) {}

  public open() {
    const modalRef = this.modalService.open(TaskFormComponent);
    modalRef.componentInstance.name = 'World';
  }
}
