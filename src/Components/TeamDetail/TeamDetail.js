import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";


const TeamDetail = (props) => {
    const { teamId } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]));
    }, [teamId]);

    const { strTeamBadge, intFormedYear, strCountry, strSport, strGender, strFacebook, strTwitter, strYoutube } = team;

    let facebook = `https://${strFacebook}`;
    let twitter = `https://${strTwitter}`;
    let youtube = `https://${strYoutube}`;
    const containerStyle = {
        background: '#00003d',
        color: 'white'
    }

    const secondRowStyle = {
        background: 'royalblue',
        borderRadius: '20px'
    }

    let gender = strGender;
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
                    <Image src={strTeamBadge} fluid />
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
            </Row>
            <Row style={secondRowStyle}>
                <Col xs={12} md={4}>
                    <h4>Founded: {intFormedYear}</h4>
                    <h4>Country: {strCountry}</h4>
                    <h4>Sport Type: {strSport}</h4>
                    <h4>Gender: {strGender}</h4>
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
                <Col xs={12} md={4}>
                    <Image src={imgURL} fluid />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12}>
                    <p>{team.strDescriptionEN}</p>
                </Col>
            </Row>
            <Row style={{textAlign: "center", margin: "10px"}}>
                <Col xs={12} md={12}>    
                    <a style={{margin: "10px"}} href={facebook}><FontAwesomeIcon icon={faFacebook} /></a>
                    <a style={{margin: "10px"}} href={twitter}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a style={{margin: "10px"}} href={youtube}><FontAwesomeIcon icon={faYoutube} /></a>
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