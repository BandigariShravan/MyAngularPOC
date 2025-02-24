import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number | undefined;
  @Input() totalPages: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  onPageChange(page: number): void {
    console.log(`Page changed to ${page}`);
  }
}