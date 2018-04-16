import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() onAgreed = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  disAgree() {
    this.onAgreed.emit(false);
  }
  agree() {
    this.onAgreed.emit(true);
  }
}
