import React, { useEffect, useState } from 'react';
import HomeDetail from '../HomeDetail/HomeDetail';
import './Home.css'
import Header from '../Header/Header'

const Home = () => {
    const[team,setTeam] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => {
            console.log(data.teams);
            setTeam(data.teams);
        })
    },[])
    return (
        <div className='home'>
            <Header></Header>
            {
              team.map(team => <HomeDetail 
                team ={team}
                >
                </HomeDetail>)
            }
        </div>
    );
};

export default Home;