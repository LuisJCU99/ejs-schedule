import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]

})
export class AppComponent {
  title = 'schedule-angular';
  public data: object[] = [
   
  ];
  public selectedDate: Date = new Date(2023, 1, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  };
}

