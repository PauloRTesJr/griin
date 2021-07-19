import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'griin-detailed-button',
  templateUrl: './detailed-button.component.html',
  styleUrls: ['./detailed-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailedButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
