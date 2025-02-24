import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule
import { DataService } from '../../services/data.service';
import { HttpParams } from '@angular/common/http';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-sample',
  standalone: true,
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [DataService],
  imports: [CommonModule,PaginationComponent]  // ✅ Add CommonModule here
})
export class SampleComponent {
  items: { title: string; body: string }[] = [];  // ✅ Correct type

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSampleData( {
      params: new HttpParams().set('pageSize','10').set('page','2')
    }).subscribe(data => {
      console.log('Fetched items:', data);  // Debugging log
      this.items = data;
    });
  }
  
}
