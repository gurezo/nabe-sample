import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  val = 0;
  minVal = 0;
  maxVal = 100;

  constructor() {}

  ngOnInit() {
    this.val = 0;
  }

  // ゲージアップ用メソッド
  onIncrement() {
    if (this.val + 1 > this.maxVal) {
      this.val = this.maxVal;
    } else {
      this.val += 10;
    }
    console.log(this.val);
  }

  // ゲージダウン用メソッド
  onDecrement() {
    if (this.val - 1 < this.minVal) {
      this.val = this.minVal;
    } else {
      this.val -= 10;
    }
    console.log(this.val);
  }
}
