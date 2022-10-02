import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [`
    .col {
      height:100;
      width:100;
    }
  `
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] =  []/* [ 'Dascargas', 'Ventas en tienda', 'Venta online' ] */;
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: []
      },
    ]
  };
 
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {
  
      this.graficasService.getUsuariosRedesSocialesDonaData().subscribe( ({ labels, datasets}) => { 
      this.doughnutChartData = { labels, datasets };
    })
  }
}