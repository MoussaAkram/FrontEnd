import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  data: any[] = [];
  p: number = 1;
  pageSize: number = 10;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private appService : ServiceService) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.appService.getData().subscribe((data: any) => {
      this.data = data;
    });
  }

  sortData(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.data.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }


  previousPage() {
    if (this.p > 1) {
      this.p--;
    }
  }
  scrollToTop(): void {
    document.body.scrollIntoView({ behavior: 'smooth' });
  }

  nextPage() {
    const totalPages = this.getTotalPages();
    if (this.p < totalPages) {
      this.p++;
    }
    this.scrollToTop();
  }

  getTotalPages() {
    return Math.ceil(this.data.length / this.pageSize);
  }
}
