import React from 'react';
import Moment from 'react-moment';

const LaunchItem = ({ launch }) => {
  return (
    <div>
      <p>Mission: {launch.mission_name}</p>
      <p>
        Date:{' '}
        <Moment format='YYYY-MM-DD HH:mm'>{launch.launch_date_local}</Moment>
      </p>
      <button>Launch details</button>
    </div>
  );
};

export default LaunchItem;
