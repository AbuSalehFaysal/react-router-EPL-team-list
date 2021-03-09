import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);
    return (
        <div>
            <h1>This is Home Component</h1>
            <h2>Lenght: {teams.length}</h2>
            {/* <Teams></Teams> */}
            {
                teams.map(team => <Teams team={team}></Teams>)
            }
        </div>
    );
};

export default Home;