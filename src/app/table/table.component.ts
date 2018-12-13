import { Component, OnInit } from '@angular/core';
// import { headerData } from './table.json'; // tsファイルに書いたJSONデータ

declare function require(x: any): any; // requireと言う方法でインポート

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  recJson = require('../../assets/json/data.json'); // requireと言う方法でインポート
  recArray = [];

  constructor() {}

  ngOnInit() {
    // ループ用にデータ取り出し
    this.recArray = this.recJson.data;
    console.log(this.recArray);

    // ライブラリ用の変数 dtOptions
    this.dtOptions = {
      ajax: '../../assets/json/data.json', // ajax で、assets内のdata.jsonを取得
      columns: [
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
      ]
    };
  }
}
