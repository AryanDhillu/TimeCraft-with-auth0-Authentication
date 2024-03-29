import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Makeschedule = ({ onAdd }) => {
    const { user } = useAuth0();
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
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!day1 || !day2 || !day3 || !time1 || !time2 || !time3) {
            setError('Please provide data for atleat top 3 days and time inputs');
            return;
        }

        const userId = user.sub;
        const username = user.name;

        onAdd({ day1, time1, day2, time2, day3, time3, day4, time4, day5, time5, userId, username });

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
        setError('');
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Enter Time Slots</h2>
            <form onSubmit={handleSubmit} className="mb-5">
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="day1" className="form-label">Day 1</label>
                        <input id="day1" type="text" className="form-control" placeholder="Day 1" value={day1} onChange={(e) => setDay1(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="time1" className="form-label">Time 1</label>
                        <input id="time1" type="time" className="form-control" placeholder="Time 1" value={time1} onChange={(e) => setTime1(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="day2" className="form-label">Day 2</label>
                        <input id="day2" type="text" className="form-control" placeholder="Day 2" value={day2} onChange={(e) => setDay2(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="time2" className="form-label">Time 2</label>
                        <input id="time2" type="time" className="form-control" placeholder="Time 2" value={time2} onChange={(e) => setTime2(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="day3" className="form-label">Day 3</label>
                        <input id="day3" type="text" className="form-control" placeholder="Day 3" value={day3} onChange={(e) => setDay3(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="time3" className="form-label">Time 3</label>
                        <input id="time3" type="time" className="form-control" placeholder="Time 3" value={time3} onChange={(e) => setTime3(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="day4" className="form-label">Day 4</label>
                        <input id="day4" type="text" className="form-control" placeholder="Day 4" value={day4} onChange={(e) => setDay4(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="time4" className="form-label">Time 4</label>
                        <input id="time4" type="time" className="form-control" placeholder="Time 4" value={time4} onChange={(e) => setTime4(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="day5" className="form-label">Day 5</label>
                        <input id="day5" type="text" className="form-control" placeholder="Day 5" value={day5} onChange={(e) => setDay5(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="time5" className="form-label">Time 5</label>
                        <input id="time5" type="time" className="form-control" placeholder="Time 5" value={time5} onChange={(e) => setTime5(e.target.value)} />
                    </div>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">Generate Schedule</button>
            </form>
        </div>
    );
};

export default Makeschedule;
