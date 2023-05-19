import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

  @Input()
  equipe!: Equipe;

  @Input()
  ajout!: boolean;

  @Output()
  equipeUpdated = new EventEmitter<Equipe>();

  constructor() { }

  ngOnInit(): void {
    console.log("NgOnInit UpdateEquipeComponent", this.equipe);
  }

  saveEquipe() {
    this.equipeUpdated.emit(this.equipe);
  }

}
