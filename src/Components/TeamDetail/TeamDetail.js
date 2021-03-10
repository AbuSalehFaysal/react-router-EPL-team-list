import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const TeamDetail = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]));
    }, [])
    const containerStyle = {
        backgroundImage: `url('cover.png')`

  /* Full height */
//   height: 100%;

//   /* Center and scale the image nicely */
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
    }

    // let gender = team.strGender;
    // let imgURL;
    // if (gender == 'Male') {
    //     imgURL = "Male.png";
    // } else {
    //     imgURL = "Femal.png";
    // }
    return (
        <Container style={{backgroundImage: `url('cover.png')`}}>
            <Row>
                <Col xs={12} md={4}>
                    
                </Col>
                <Col xs={12} md={4}>
                    <Image src={team.strTeamBadge} fluid />
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <h4>Name: {team.strTeam}</h4>
                    <h4>Stadium: {team.strStadium}</h4>
                    <h4>Stadium: {team.intFormedYear}</h4>
                    <h4>Stadium: {team.strCountry}</h4>
                    <h4>Stadium: {team.strSport}</h4>
                    <h4>Stadium: {team.strGender}</h4>
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
            </Row>
        </Container>
        
        // <div>
        //     <Image src={team.strTeamBadge} fluid />
        //     <h1>Name: {team.strTeam}</h1>
        //     <h1>Stadium: {team.strStadium}</h1>
        //     <h1>Stadium: {team.intFormedYear}</h1>
        //     <h1>Stadium: {team.strCountry}</h1>
        //     <h1>Stadium: {team.strSport}</h1>
        //     <h1>Stadium: {team.strGender}</h1>
        // </div>
    );
};

export default TeamDetail;