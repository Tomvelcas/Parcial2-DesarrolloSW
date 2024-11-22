import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';  
import { TrainerDetail } from '../trainerDetail';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Array<TrainerDetail> = []; 
  selected: Boolean = false;  
  selectedTrainer!: TrainerDetail;  

  constructor(private trainerService: TrainerService) {}

  getTrainersList(): void {
    this.trainerService.getTrainers().subscribe((trainers) => {
      this.trainers = trainers;  
    });
  }

  ngOnInit(): void {
    this.getTrainersList();  
  }

  onSelected(trainer: TrainerDetail): void {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}
