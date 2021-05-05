import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <div>
      <h1>Launches</h1>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>loading...</h4>;
          if (error) console.log(error);
          return (
            <div>
              {data.launches.map((launch) => (
                <LaunchItem launch={launch} key={launch.flight_number} />
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Launches;
