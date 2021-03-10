import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning, faFutbol } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const { strTeam, idTeam, strStadium, strSport, strTeamBadge } = props.team;

    const containerStyle = {
        border: '1px solid lightgray',
        backgroundColor: 'lightgray',
        marginTop: '20px'
    }

    return (
        <Container style={containerStyle}>
            <Row>
                <Col xs={12} md={6}>

                    <Image src={strTeamBadge} fluid />
                    {/* <img style="margin: 0 auto;" src="1.png" alt=""/> */}

                </Col>
                <Col xs={12} md={6}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 style={{ textAlign: "center" }}>{strTeam}</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 style={{ textAlign: "center" }}>Sports Type: {strSport}</h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Link
                        to={`/teams/${idTeam}`}> <Button style={{ textAlign: "center" }} color="primary" size="lg" block><FontAwesomeIcon icon={faRunning} /> <FontAwesomeIcon icon={faFutbol} /> Details</Button>
                    </Link>
                    <br />
                    <br />
                </Col>
            </Row>

        </Container>
        // <div style={teamStyle}>
        //     <h2> {strTeam}</h2>
        //     <h2> {strSport}</h2>
        // <Link 
        //     to={`/teams/${idTeam}`}> <Button color="primary">Details</Button>
        // </Link>
        // </div>
    );
};

export default Teams;