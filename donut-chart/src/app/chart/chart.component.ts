import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @Input() title: string = "";
  @Input() is3d!: boolean;
  @Input() pieHole!: number;
  @Input() data: any[] = [];
  

  @ViewChild('appChart') chartElement!: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    google.charts.load('current', {'packages':['corechart']});

    google.charts.setOnLoadCallback(() => {
      var donutChartData = google.visualization.arrayToDataTable(this.data);

      var options = {
        title: this.title,
        is3D: this.is3d,
        pieHole: this.pieHole
      };

      var chart = new google.visualization.PieChart(this.chartElement.nativeElement);
      chart.draw(donutChartData, options);
    });
  }  
}
