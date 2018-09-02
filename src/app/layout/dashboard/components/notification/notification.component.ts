import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    LineChart = [];
    constructor() { }
    ngOnInit() {
     this.LineChart = new Chart('lineChart', {
        type: 'line',
        data: {
            labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june'],
            datasets: [{
                label: 'In Red',
                data: [3, 26, 21, 1, 10, 2],
                fill: false,
                lineTension: 0.1,
                borderColor: 'red',
                borderWidth: 1,
            }]
        },
        options: {
            title: {
                text: 'Product Health',
                display: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
     });
     }
}
