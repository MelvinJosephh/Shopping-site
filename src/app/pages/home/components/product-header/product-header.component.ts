import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();
 sort: string = 'Desc';
 itemsShowCount = 12;

onSortUpdated(newSort: string): void {
  this.sort = newSort;
  this.sortChange.emit(newSort);
}
onItemsUpdated (count: number): void {
  this.itemsShowCount = count;
  this.itemsCountChange.emit(count);
}
onColumnsUpdated(colsNum: number): void{
this.columnsCountChange.emit(colsNum);
}
}
