import React, { useState } from 'react';

const Makeschedule = ({onAdd}) => {
    const [day1, setDay1] = useState('');
    const [time1, setTime1] = useState('');
    const [day2, setDay2] = useState('');
    const [time2, setTime2] = useState('');
    const [day3, setDay3] = useState('');
    const [time3, setTime3] = useState('');
    const [day4, setDay4] = useState('');
    const [time4, setTime4] = useState('');
    const [day5, setDay5] = useState('');
    const [time5, setTime5] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onAdd({day1, time1, day2, time2, day3, time3, day4, time4, day5, time5})

        setDay1('');
        setTime1('');
        setDay2('');
        setTime2('');
        setDay3('');
        setTime3('');
        setDay4('');
        setTime4('');
        setDay5('');
        setTime5('');
    };

    return (
        <div id='di'>
            <h2>Enter Time Slots</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="day1">Day 1</label>
                    <input id="day1" type="text" placeholder="Day 1" value={day1} onChange={(e) => setDay1(e.target.value)} />
                    <input type="time" placeholder="Time Slot 1" value={time1} onChange={(e) => setTime1(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="day2">Day 2</label>
                    <input id="day2" type="text" placeholder="Day 2" value={day2} onChange={(e) => setDay2(e.target.value)} />
                    <input type="time" placeholder="Time Slot 1" value={time2} onChange={(e) => setTime2(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="day3">Day 3</label>
                    <input id="day3" type="text" placeholder="Day 3" value={day3} onChange={(e) => setDay3(e.target.value)} />
                    <input type="time" placeholder="Time Slot 1" value={time3} onChange={(e) => setTime3(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="day4">Day 4</label>
                    <input id="day4" type="text" placeholder="Day 4" value={day4} onChange={(e) => setDay4(e.target.value)} />
                    <input type="time" placeholder="Time Slot 1" value={time4} onChange={(e) => setTime4(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="day5">Day 5</label>
                    <input id="day5" type="text" placeholder="Day 5" value={day5} onChange={(e) => setDay5(e.target.value)} />
                    <input type="time" placeholder="Time Slot 1" value={time5} onChange={(e) => setTime5(e.target.value)} />
                </div>
                <button type="submit">Generate Schedule</button>
            </form>
        </div>
    );
};

export default Makeschedule;
