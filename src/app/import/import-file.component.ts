import { Component, OnInit } from '@angular/core';
import { ImportFileService } from './import-file.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.css']
})


export class ImportFileComponent implements OnInit {
  // Variable to store shortLink from api response 
  loading: boolean = false; // Flag variable 
  file!: File; // Variable to store file 
  rowData: any;
  gridOptions:GridOptions;
  
  columnDefs = [
    { field: 'tessera', width: 150},
    { field: 'nome', width: 100 },
    { field: 'cognome', sortable: true, filter: true, width: 100 },
    { field: 'data', width: 150},
    { field: 'sesso', width: 100},
    { field: 'nazione', width: 100},
    { field: 'provincia', width: 100},
    { field: 'comune', width: 100},
    { field: 'hash', width: 300}
];

  // Inject service  
constructor(private service: ImportFileService) { 
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
         // this.gridOptions.api?.setAlwaysShowVerticalScroll;
          this.gridOptions.api?.paginationGetCurrentPage;
          this.gridOptions.api?.paginationGoToNextPage;
      }
   };

  } 

  ngOnInit(): void { 
  } 

  // On file Select 
  onChange(event:Event) {
      const element = event.currentTarget as HTMLInputElement;
      let fileList: FileList | null = element.files;
      if (fileList) {
        console.log("FileUpload -> files", fileList);
        this.file = fileList[0];
      }
  } 

 

  // OnClick of button Upload 
  onUpload() { 
      let out = this.service.upload(this.file).subscribe( 
        data => {
          this.loading = true;
          this.rowData = data;
        },
        error => console.log(error));

  } 

 
  
  onBtnExport(): void {
    const params = {
      columnGroups: true,
      allColumns: true,
      fileName: 'export.xls',
      //processCellCallback: formattingFunction,
      skipHeaders: true,
      //columnSeparator: ';'
    };
    //this.gridOptions.api.exportDataAsExcel(excelParams)
    this.gridOptions.api?.exportDataAsExcel(params);
  }




  

} 



