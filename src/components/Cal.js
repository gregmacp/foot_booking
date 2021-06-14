// react-availability-calendar

import {Component} from "react";
import {
  AvailabilityCalendar,
  AvailabilityEvent,
  MsSinceMidnightRange,
  Booking,
  Range,
  CalendarThemeProp,
} from 'react-availability-calendar';
import moment from 'moment';


const msInHour = 60 * 60 * 1000;

const Cal = () => {
  const now = new Date();

  const onAvailabilitySelected = (a: AvailabilityEvent) =>
    console.log('Availability slot selected: ', a);

  const onChangedCalRange = (r: Range) =>
    console.log('Calendar range selected (fetch bookings here): ', r);

  const slotLengthMs = (1000 * 60);




  const blockOutPeriods: MsSinceMidnightRange[] = [
    [0 * msInHour, 9 * msInHour],
    [19 * msInHour, 24 * msInHour],
  ];

  const bookings: Booking[] = [
    {
      startDate: new Date(2020, 2, 1, 19),
      endDate: new Date(2020, 2, 1, 20),
    },
    {
      startDate: new Date(2020, 2, 1, 16, 30),
      endDate: new Date(2020, 2, 1, 17),
    },
  ];

  const providerTimeZone = 'Etc/GMT';

  return (
    <div className="ccc" style={{ width: 350 }}>
      <AvailabilityCalendar
        bookings={bookings}
        providerTimeZone={providerTimeZone}
        moment={moment}
        initialDate={now}
        onAvailabilitySelected={onAvailabilitySelected}
        onCalRangeChange={onChangedCalRange}
        blockOutPeriods={blockOutPeriods}
      />
    </div>
  );
};



export default Cal;
