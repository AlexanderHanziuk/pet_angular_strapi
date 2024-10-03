import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { HardSkillsService } from '../../services/hard-skills-service/hard-skills.service';
import { SoftSkillsService } from '../../services/soft-skills-service/soft-skills.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit, OnDestroy {
  public hardSkillsData: any[] = [];
  public softSkillsData: any[] = [];
  private mySubscriptionHardSkills!: Subscription;
  private mySubscriptionSoftSkills!: Subscription;

  constructor(
    private readonly hardSkillsService: HardSkillsService,
    private readonly softSkillsService: SoftSkillsService
  ) {}

  public ngOnInit(): void {
    this.mySubscriptionHardSkills = this.hardSkillsService
      .getHardSkillsData()
      .subscribe((res) => {
        JSON.parse(JSON.stringify(res.body)).data.forEach((el: any) => {
          this.hardSkillsData.push(el);
        });
      });

    this.mySubscriptionSoftSkills = this.softSkillsService
      .getSoftSkillsData()
      .subscribe((res) => {
        JSON.parse(JSON.stringify(res.body)).data.forEach((el: any) => {
          this.softSkillsData.push(el);
        });
      });
  }

  public ngOnDestroy(): void {
    this.mySubscriptionHardSkills.unsubscribe();
    this.mySubscriptionSoftSkills.unsubscribe();
  }
}
