import { Component, OnInit } from '@angular/core';

declare function require(x: any): any; // requireを使うための宣言

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // データの配列 table.component.html L11~
  recJson = require('../../assets/json/data.json'); // requireと言う方法でインポート
  recArray = [];

  // 見慣れた実装
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

  constructor() {}

  ngOnInit() {
    // ループ用にデータ取り出し
    this.recArray = this.recJson.data;
    console.log(this.recArray);
    console.log(this.headrData);
  }
}
