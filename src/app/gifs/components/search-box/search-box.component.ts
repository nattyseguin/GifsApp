import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';


//#txtTagInput (el nombre que queramos ) asi se va llamar nuestro input en todo el template
//keyup.enter se llama a la funcion cuando se clika en enter
@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar gifs..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `
})

export class SearchBoxComponent {
  @ViewChild("txtTagInput") //coge el valor del input por referencia
  public tagInput!: ElementRef<HTMLInputElement>

  //injectamos el servicio
  constructor(private gifsService: GifsService ) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value="";

  }
}
