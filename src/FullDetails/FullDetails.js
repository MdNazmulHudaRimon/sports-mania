import React from 'react';
import male from '../Photo/male.png'
import female from '../Photo/female.png'
import './FullDetails.css'

const FullDetails = (props) => {
    console.log(props.team)
    const{strTeam,strTeamFanart3,strCountry,intFormedYear,strGender,strSport,strTeamLogo,strTeamBanner,strDescriptionEN} = props.team;
    return (
        <section className='full'>
            <div className ='banner'>
                <img src={strTeamBanner} alt=""/>
            </div>
            <div className="logo">
                <img src={strTeamLogo} alt=""/>
            </div>
            <div className = "details">
            <div className="team-details">
                <h2>{strTeam}</h2>
                <h3>Founded:{intFormedYear}</h3>
                <h3>Country:{strCountry}</h3>
                <h4>Gender:{strGender}</h4>
                <h4>Sport Type :{strSport} </h4>
           </div>
           <div className="team-img">
              {/* {
                  strGender === 'Male' ? <img src={male} alt=""/> : <img src={female} alt=""/>
              } */}
              <img src={strTeamFanart3} alt=""/>
           </div>
           </div>
           <div className="description">
               <p>{strDescriptionEN}</p>
           </div>
        </section>
    );
};

export default FullDetails;