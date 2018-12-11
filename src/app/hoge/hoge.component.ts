import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoge',
  templateUrl: './hoge.component.html',
  styleUrls: ['./hoge.component.scss']
})
export class HogeComponent implements OnInit {
  // ボタンのループ処理用JSON
  data = [
    { title: 'Alpha', index: 1 },
    { title: 'Beta', index: 2 },
    { title: 'Ganma', index: 3 }
  ];

  constructor() {}

  ngOnInit() {}

  // onClicK(idx) {
  //   // alert('インデックス: ' + idx);
  //   if (idx === 2) {
  //     alert('Yahooo!!!!');
  //   } else {
  //     alert('インデックス: ' + idx);
  //   }
  // }

  // 引数を{ title: '〜〜〜', index: ？ }で受け取り
  onClicK(rec) {
    if (rec.title === 'Beta') {
      alert('Yahooo!!!!');
    } else {
      alert('インデックス: ' + recidx);
    }
  }
}
