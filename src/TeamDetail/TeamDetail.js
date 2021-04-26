import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FullDetails from '../FullDetails/FullDetails';

const TeamDetail = () => {
    const {id} = useParams()
    const [team,setTeam] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.teams);
            setTeam(data.teams);
        })
    },[])

    return (
        <div>
            {
                team.map(team => <FullDetails team = {team}></FullDetails>)
            }
        </div>
    );
};
export default TeamDetail;