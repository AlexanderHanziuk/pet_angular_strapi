import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  public description: string =
    "In this section I'll tell you a little about myself. I was born and live in Minsk, Belarus. I'm 25 years old and I'm full of strength and energy to make this world a better place. I started working on development a little over a year ago and now I'm 100% sure that this is my calling. If you're interested in learning more about me, click on the button below.";
}
