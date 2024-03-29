import React from 'react';
import './Table.css';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = ({ data }) => {
  const { user } = useAuth0();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Schedule</h2>
      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="table-primary">
            <tr>
              <th>Day/Time</th>
              <th>{data.time1}</th>
              <th>{data.time2}</th>
              <th>{data.time3}</th>
              <th>{data.time4}</th>
              <th>{data.time5}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>{data.day1}</b>
              </td>
              {data.day1 && data.time1 ? <td>Social Media</td> : <td></td>}
              {data.day1 && data.time2 ? <td>Facebook Live</td> : <td></td>}
              {data.day1 && data.time3 ? <td>Photo Sharing</td> : <td></td>}
              {data.day1 && data.time4 ? <td>Video Calls</td> : <td></td>}
              {data.day1 && data.time5 ? <td>Messages</td> : <td></td>}
            </tr>
            <tr>
              <td>
                <b>{data.day2}</b>
              </td>
              {data.day2 && data.time1 ? <td>News Feed</td> : <td></td>}
              {data.day2 && data.time2 ? <td>Messages</td> : <td></td>}
              {data.day2 && data.time3 ? <td>Friend Requests</td> : <td></td>}
              {data.day2 && data.time4 ? <td>Profile Updates</td> : <td></td>}
              {data.day2 && data.time5 ? <td>Video Calls</td> : <td></td>}
            </tr>
            <tr>
              <td>
                <b>{data.day3}</b>
              </td>
              {data.day3 && data.time1 ? <td>News Feed</td> : <td></td>}
              {data.day3 && data.time2 ? <td>Messages</td> : <td></td>}
              {data.day3 && data.time3 ? <td>Friend Requests</td> : <td></td>}
              {data.day3 && data.time4 ? <td>Profile Updates</td> : <td></td>}
              {data.day3 && data.time5 ? <td>Facebook Live</td> : <td></td>}
            </tr>
            <tr>
              <td>
                <b>{data.day4}</b>
              </td>
              {data.day4 && data.time1 ? <td>Social Media</td> : <td></td>}
              {data.day4 && data.time2 ? <td>Events</td> : <td></td>}
              {data.day4 && data.time3 ? <td>Explore</td> : <td></td>}
              {data.day4 && data.time4 ? <td>Ad Campaigns</td> : <td></td>}
              {data.day4 && data.time5? <td>AFriend Requests</td> : <td></td>}
            </tr>
            <tr>
              <td>
                <b>{data.day5}</b>
              </td>
              {data.day5 && data.time1 ? <td>Notifications</td> : <td></td>}
              {data.day5 && data.time2 ? <td>News Feed</td> : <td></td>}
              {data.day5 && data.time3 ? <td>Groups</td> : <td></td>}
              {data.day5 && data.time4 ? <td>Video Editing</td> : <td></td>}
              {data.day5 && data.time5 ? <td>Ad Campaigns</td> : <td></td>}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
