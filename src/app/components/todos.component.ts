import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos',
  template: `
<mat-card>
  <mat-card-header><h2>Ma liste de course</h2></mat-card-header>
  <mat-card-content>
    <ul>
      <li *ngFor="let todo of todos">
        <!-- TODO: afficher le label et un checkbox pour chaque todo
        - pour le checkbox, utiliser https://material.angular.io/components/checkbox/overview (déjà importé)
        -->
      </li>
    </ul>
  </mat-card-content>
</mat-card>
  `
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  ngOnInit() {}
}
