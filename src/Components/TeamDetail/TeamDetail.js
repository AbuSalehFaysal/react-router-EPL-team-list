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
        background: '#00003d',
        color: 'white'
    }

    const secondRowStyle = {
        background: 'royalblue',
        borderRadius: '20px'
    }

    let gender = team.strGender;
    let imgURL;
    if (gender == 'Male') {
        imgURL = "male.png";
    } else {
        imgURL = "female.png";
    }
    return (
        <Container style={containerStyle}>
            <Row>
                <Col xs={12} md={4}>
                    
                </Col>
                <Col xs={12} md={4}>
                    <Image src={team.strTeamBadge} fluid />
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
            </Row>
            <Row style={secondRowStyle}>
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
                    <Image src="cover6.jpg" fluid />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <p>{team.strDescriptionEN}</p>
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