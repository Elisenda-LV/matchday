import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DeleteLeagueComponent } from '../delete-league/delete-league.component';

@Component({
  selector: 'app-delete-league-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-league-button.component.html',
  styleUrl: './delete-league-button.component.scss'
})
export class DeleteLeagueButtonComponent {

  modalService = inject(NgbModal);
  modalConfig = inject(NgbModalConfig);

  deleteLeagueModal(){
    this.modalService.open(DeleteLeagueComponent, {size: 'lg', centered: true, scrollable: true })

  }
}
