import { Component, Input } from '@angular/core';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css'
})
export class SerieDetailComponent {

  @Input() serieSeleccionada!: Serie;

}
