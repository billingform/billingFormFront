import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  @Input() content;
  @Input() title = '';
  @Output() saveBtn = new EventEmitter();
  @Output() closeBtn = new EventEmitter();


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  save(){
    this.activeModal.close();
    this.saveBtn.emit();
  }

  close(){
    this.activeModal.close();
    this.closeBtn.emit();
  }
}
