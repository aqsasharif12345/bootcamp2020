import React from 'react';
import {MissionsInfoQuery} from './../../generated/graphql'

interface Props{
    data: MissionsInfoQuery
}
const MissionList:React.FC<Props> = ({data}) =>{
    return (
        <div>
            { data.launches?.map((launchObj,ind) => {
                <li>
                    {launchObj?.mission_name}
                </li>
            })}
        </div>
    )
}
export default MissionList