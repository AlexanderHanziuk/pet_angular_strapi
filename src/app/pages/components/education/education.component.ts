import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { EducationService } from '../../services/education-service/education.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ExperienceService } from '../../services/experience-service/experience.service';
import { ResponsibilityService } from '../../services/responsibility-service/responsibility.service';
import { AchievementService } from '../../services/achievement-service/achievement.service';

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
  public experienceData: any[] = [];
  public responsibilityData: any[] = [];
  public achievementData: any[] = [];
  private mySubscriptionEducation!: Subscription;
  private mySubscriptionExperience!: Subscription;
  private mySubscriptionResponsibility!: Subscription;
  private mySubscriptionAchievement!: Subscription;

  constructor(
    private readonly educationService: EducationService,
    private readonly experienceService: ExperienceService,
    private readonly responsibilityService: ResponsibilityService,
    private readonly achievementService: AchievementService
  ) {}

  public ngOnInit(): void {
    this.mySubscriptionEducation = this.educationService
      .getEducationData()
      .subscribe((res) => {
        JSON.parse(JSON.stringify(res.body)).data.forEach((el: any) => {
          this.educationData.push(el);
        });
      });

    this.mySubscriptionExperience = this.experienceService
      .getExperienceData()
      .subscribe((res) => {
        JSON.parse(JSON.stringify(res.body)).data.forEach((el: any) => {
          this.experienceData.push(el);
        });
      });

    this.mySubscriptionResponsibility = this.responsibilityService
      .getResponsibilityData()
      .subscribe((res) => {
        JSON.parse(JSON.stringify(res.body)).data.forEach((el: any) => {
          this.responsibilityData.push(el);
        });
      });

    this.mySubscriptionAchievement = this.achievementService
      .getAchievementData()
      .subscribe((res) => {
        JSON.parse(JSON.stringify(res.body)).data.forEach((el: any) => {
          this.achievementData.push(el);
        });
      });
  }

  public ngOnDestroy(): void {
    this.mySubscriptionEducation.unsubscribe();
    this.mySubscriptionExperience.unsubscribe();
    this.mySubscriptionResponsibility.unsubscribe();
    this.mySubscriptionAchievement.unsubscribe();
  }
}
