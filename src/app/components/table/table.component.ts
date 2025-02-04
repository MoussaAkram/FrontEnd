import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  data: any[] = [];
  items: any[] = [];
  p: number = 1;
  pageSize: number = 10;

  constructor(private appService : ServiceService) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.appService.getData().subscribe((data: any) => {
      this.data = data;
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
