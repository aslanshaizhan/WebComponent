import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  headers = ['Date', 'Distance in meters', 'Time', 'Average speed', 'Options'];

  rows = [
    {
      'Date' : '2018-04-11',
      'Distance in meters' : '5.000.00',
      'Time' : '42:40',
      'Average speed' : '7.20',
      'Options' : 'Edit Delete'
    },
    {
      'Date' : '2018-04-08',
      'Distance in meters' : '3.000.00',
      'Time' : '13:20',
      'Average speed' : '13.50',
      'Options' : 'Edit Delete'
    },
    {
      'Date' : '2018-04-02',
      'Distance in meters' : '5.000.00',
      'Time' : '35:00',
      'Average speed' : '8.57',
      'Options' : 'Edit Delete'
    },
    {
      'Date' : '2018-03-28',
      'Distance in meters' : '1.000.00',
      'Time' : '10:00',
      'Average speed' : '6.00',
      'Options' : 'Edit Delete'
    },
    {
      'Date' : '2018-03-27',
      'Distance in meters' : '1.200.00',
      'Time' : '12:00',
      'Average speed' : '6.00',
      'Options' : 'Edit Delete'
    },
    {
      'Date' : '2018-03-26',
      'Distance in meters' : '1.300.00',
      'Time' : '13:30',
      'Average speed' : '6.24',
      'Options' : 'Edit Delete'
    },
  ];
}
