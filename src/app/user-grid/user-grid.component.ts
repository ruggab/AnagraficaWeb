import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { UserService } from "../user.service";

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {
  //users!: Observable<User[]>; 
  rowData: any;
  gridOptions:GridOptions;
  
  columnDefs = [
    { field: 'tessera' },
    { field: 'nome' },
    { field: 'cognome', sortable: true, filter: true },
    { field: 'data'},
    { field: 'sesso'},
    { field: 'nazione'},
    { field: 'provincia'},
    { field: 'comune'},
    { field: 'hash'}
];
  
  constructor(private userService: UserService) { 
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
         // this.gridOptions.api?.setAlwaysShowVerticalScroll;
          this.gridOptions.api?.paginationGetCurrentPage;
          this.gridOptions.api?.paginationGoToNextPage;
      }
   };
  }

  ngOnInit(): void {
    this.reloadData();
    //this.rowData = this.users;
  }

 
reloadData() {
  this.userService.getUsersList().subscribe(
    data => {
      //console.log(data);
      this.rowData = data;
    },
    error => console.log(error));
}

 
onBtnExport(): void {
  const params = {
    columnGroups: true,
    allColumns: true,
    fileName: 'filename_of_your_choice.csv',
    columnSeparator: ';'
  };
  this.gridOptions.api?.exportDataAsCsv(params);
}






}





