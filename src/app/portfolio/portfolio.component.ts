import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { projectDetails } from '../constants/projectDetails';
import { projectType } from '../constants/Types';
import { Router } from '@angular/router';

@Component({
  selector: 'Portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {

  projects: projectType[] = projectDetails;

  constructor(private router: Router) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
