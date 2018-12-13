import { Component, OnInit } from '@angular/core';

declare function require(x: any): any; // requireを使うための宣言

// 仕事の実装では、serviceに書くコード
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  url = './assets/json/data.json';  // サーバー取得する場合のurlの定義

  // データの配列 table.component.html L22~
  recJson = require('../../assets/json/data.json'); // requireと言う方法でインポート
  recArray = [];

  // 見慣れた実装(JSON直書き)
  headrData = [
    {
      title: 'ID',
      data: 'id'
    },
    {
      title: 'First name',
      data: 'firstName'
    },
    {
      title: 'Last name',
      data: 'lastName'
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // ループ用にデータ取り出し
    this.recArray = this.recJson.data;
    console.log(this.recArray);
    console.log(this.headrData);

    // 仕事の実装では、serviceに書くコード
    // データの配列 table.component.html L22~
    this.getJsonData().subscribe(value => { // => {} と言う書き方がアロー関数です。
      console.log(value);
      // データ取り出し用関数を呼び出し => このファイル内のL58へ
      this.recArray = this.getData(value);
      console.log(this.recArray);
    });
  }

  // 仕事の実装では、serviceに書くコード
  getJsonData() {
    return this.http.get(this.url);
  }

  // データ取り出し用関数
  getData(value) {
    return value.data;
  }
}
