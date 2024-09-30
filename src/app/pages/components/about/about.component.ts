import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AboutService } from '../../services/about-service/about.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AboutModalService } from '../../services/about-modal-service/about-modal.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit, OnDestroy {
  public description: string = '';
  public modalData: any[] = [];
  public data: string = '';
  public stateOfModalWindow = false;
  private mySubscriptionAboutTitle!: Subscription;
  private mySubscriptionAboutModalData!: Subscription;

  constructor(
    private readonly aboutService: AboutService,
    private readonly aboutModal: AboutModalService
  ) {}

  public ngOnInit(): void {
    this.mySubscriptionAboutTitle = this.aboutService
      .getAboutTitle()
      .subscribe((res) => {
        this.data = JSON.stringify(res.body);
        this.description = JSON.parse(this.data).data.title;
      });

    this.mySubscriptionAboutModalData = this.aboutModal
      .getAboutModalData()
      .subscribe((res) => {
        JSON.parse(JSON.stringify(res.body)).data.map((el: any) => {
          this.modalData.push(el);
        });
      });
  }

  public toggleStateOfModalWindow(): void {
    this.stateOfModalWindow = !this.stateOfModalWindow;
  }

  public ngOnDestroy(): void {
    this.mySubscriptionAboutTitle.unsubscribe();
    this.mySubscriptionAboutModalData.unsubscribe();
  }
}
