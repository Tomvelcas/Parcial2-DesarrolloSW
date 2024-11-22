import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { ActivatedRoute } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  trainerId!: string;
  @Input() trainerDetail!: Trainer;

  constructor(private route: ActivatedRoute, private trainerService: TrainerService) {}

  getTrainerDetail(): void {
    this.trainerService.getTrainer(this.trainerId).subscribe((trainerDetail) => {
      this.trainerDetail = trainerDetail;
    });
  }

  calcularPromedio(): number {
      let totalLevel = 0;
      for (let i = 0; i < this.trainerDetail.pokemons.length; i++) {
        totalLevel += this.trainerDetail.pokemons[i].level;
      }
      return totalLevel / this.trainerDetail.pokemons.length;
    }

  ngOnInit(): void {
    if (!this.trainerDetail) {
      this.trainerId = this.route.snapshot.paramMap.get('id')!;
      if (this.trainerId) {
        this.getTrainerDetail();
      }
    }
  }
}
