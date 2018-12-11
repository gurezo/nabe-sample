import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Output() clickEvent = new EventEmitter<null>(); // 何も型を返さなければ null

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.clickEvent.emit();
  }
}
