import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddLeagueComponent } from '../add-league/add-league.component';

@Component({
  selector: 'app-add-league-button',
  standalone: true,
  imports: [],
  templateUrl: './add-league-button.component.html',
  styleUrl: './add-league-button.component.scss'
})
export class AddLeagueButtonComponent {

  modalService = inject(NgbModal);
  modalConfig = inject(NgbModalConfig);

  addLeagueModal(){
    this.modalService.open(AddLeagueComponent, {size: 'lg', centered: true, scrollable: true })

  }
}
