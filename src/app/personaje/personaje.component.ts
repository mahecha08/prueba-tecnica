import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
})
export class PersonajeComponent {
  personaje: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', id);

    this.apiService.getDataId(id).subscribe((response) => {
      console.log('Personaje:', response);
      this.personaje = response;
    });
  }

}
