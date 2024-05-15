import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css'
})
export class SerieListComponent implements OnInit{

  constructor(private serieService: SerieService) { }

  serieSeleccionada!: Serie;
  selected: Boolean = false;

  series: Array<Serie> = [];
  promedio: number = 0;

  getSeries(): void{

    this.serieService.getSeries().subscribe(apiSeries => {
      this.series = apiSeries;
      
      for(let i = 0; i < apiSeries.length; i++){
        this.promedio += apiSeries[i].seasons;
      }

      this.promedio = this.promedio/apiSeries.length;

    });

  }

  onSelected(serie: Serie): void{

    this.selected = true;
    this.serieSeleccionada = serie;

  }

  ngOnInit(){
    this.getSeries();
  }

}
