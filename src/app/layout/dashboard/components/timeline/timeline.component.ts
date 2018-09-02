import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import  $   from 'sparkline/jquery.sparkline.js';
declare var $: any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    $( document ).ready(function() {
      // tslint:disable-next-line:quotemark
      $(".pie").sparkline([50, 25], {
      type: 'pie',
      width: '40px',
      height: '40px'});
      // tslint:disable-next-line:quotemark
      $(".bar").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 2, 8], {
        type: 'bar',
        barWidth: 5,
        height: '40px'});
      // tslint:disable-next-line:quotemark
      $(".line").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
        type: 'line',
        width: '60',
        height: '40'});
      // tslint:disable-next-line:quotemark
      $("#bar").sparkline([5, 6, 7, 2, 0, -4, -2, 4, -4, 6, 7, -2], {
        type: 'bar',
        height: '40',
        barWidth: 5});
  });
  }

}
