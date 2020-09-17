import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql';

const MissionContainer = () => {

    const { data, error, loading } = useMissionsInfoQuery();

    if (loading)
        return <h2>Loading</h2>

    console.log(data);    

    return (
        <div></div>
    )
}
export default MissionContainer