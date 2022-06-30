import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { PetAdoptionAppService } from '../../../../shared/services/pet-adoption-app.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {
  values:any;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(private service: PetAdoptionAppService){
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [1, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Mascotas ingresadas al sistema",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    }
  }

  ngOnInit(): void {
    this.data();
  }

  //Process data
  data(){
    this.service.PetCreationsByMonth()
    .subscribe(res=>{
      this.values = res;
      this.updateSeries(this.values.$values);
    })
  }

  public updateSeries(values:any) {
    this.chartOptions.series = [{
      name: "Mascotas",
      data: values
    }];
  }
}
