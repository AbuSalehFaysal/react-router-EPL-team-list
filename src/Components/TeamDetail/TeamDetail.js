import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TeamDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then (data => setTeam(data.teams[0]));
    }, [])
    return (
        <div>
            <h1>Name: {team.strTeam}</h1>
            <h1>Stadium: {team.strStadium}</h1>
            <h1>Stadium: {team.intFormedYear}</h1>
            <h1>Stadium: {team.strCountry}</h1>
            <h1>Stadium: {team.strSport}</h1>
            <h1>Stadium: {team.strGender}</h1>
        </div>
    );
};

export default TeamDetail;