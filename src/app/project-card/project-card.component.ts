import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projectType } from '../constants/Types';

@Component({
  selector: 'ProjectCard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() projectDetails: projectType = {
    name: '',
    description: '',
    github: '',
    liveLink: '',
    techStacks: []
  };
}
