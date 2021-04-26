import React from 'react';
import { Link } from 'react-router-dom';
import './HomeDetail.css'


const HomeDetail = (props) => {
    console.log(props.team);
    const {strTeam,strTeamBadge,strSport,idTeam} = props.team;
    return (
       <div className ='mainDiv'>
           <div className="team">
                <img src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>
                <p>Sports Type:{strSport}</p>
                <p>Team id  {idTeam}</p>
                <button className='btn'><Link to ={`/detail/${idTeam}`}>Explore</Link></button>
           </div>
       </div>
    );
};

export default HomeDetail;