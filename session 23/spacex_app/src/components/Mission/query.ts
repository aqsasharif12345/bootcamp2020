import gql from 'graphql-tag';
 

export const MissionsInfo = gql`
  query MissionsInfo {
    launches {
      mission_id
      mission_name
      launch_success
      launch_year
    }
  }
`;

