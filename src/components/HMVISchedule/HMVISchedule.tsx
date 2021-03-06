import React, { FC, useState } from 'react';

import './HMVISchedule.scss';
import { schedule } from './schedule';

const ScheduleHMVI: FC = (): JSX.Element => {
    const [day, setDay] = useState(21);

    const generateSchedule = (): any => {
        let scheduleElements: any = [];

        schedule[day].forEach((e: any) =>
            scheduleElements.push(
                //use a table row here instead :)
                <div className="event_item">
                    <div className="event_item_dot dot_active"></div>
                    <div className="event_item_title">{e.title}</div>
                    <div className="event_item_body">{e.body}</div>
                </div>,
            ),
        );

        return scheduleElements;
    };

    return (
        <main className="ScheduleHMVI">
            <section className="schedule-HMVI">
                <article className="calendar-HMVI">
                    <div className="container-HMVI">
                        <div className="calendar">
                            <div className="calendar_header">
                                <div className="header_title">Schedule</div>
                                <div className="side-by-side">
                                    <p className="calendar_subheader" onClick={() => setDay(21)}>
                                        November 21
                                    </p>
                                    <p className="calendar_subheader" onClick={() => setDay(22)}>
                                        November 22
                                    </p>
                                </div>
                            </div>

                            <div className="calendar_events">
                                {/* <p className="calendar_events_title">November 21, 2020</p> */}

                                {generateSchedule()}
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default ScheduleHMVI;
