import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { EducationService } from '../../services/education-service/education.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent implements OnInit, OnDestroy {
  public educationData: any[] = [];
  public mySubscriptionEducation!: Subscription;

  constructor(private readonly educationService: EducationService) {}

  public ngOnInit(): void {
    this.mySubscriptionEducation = this.educationService
      .getEducationData()
      .subscribe((res) => {
        JSON.parse(JSON.stringify(res.body)).data.forEach((el: any) => {
          this.educationData.push(el);
        });
      });
  }

  public ngOnDestroy(): void {
    this.mySubscriptionEducation.unsubscribe();
  }
}
