import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AboutService } from '../../services/about-service/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  public description: string = '';
  public data!: string;

  constructor(
    private readonly aboutService: AboutService,
    private cd: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.aboutService.getAboutTitle().subscribe((res) => {
      this.data = JSON.stringify(res.body);
      this.description = JSON.parse(this.data).data.title;
    });
  }
}
