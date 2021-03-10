import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import Image from 'react-bootstrap/Image'
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);
    
    return (
        <div>
            <Image className="background-image" src="cover6.jpg" fluid />
            <h6 style={{textAlign: "center"}}>Number of Premier League Teams: {teams.length}</h6>
            {
                teams.map(team => <Teams team={team}></Teams>)
            }
        </div>
    );
};

export default Home;