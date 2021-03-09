import React from 'react';
import { Link } from 'react-router-dom';

const Teams = (props) => {
    const {strTeam, idTeam, strStadium} = props.team;
    const teamStyle = {
        border: '1px solid lightgray',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={teamStyle}>
            <h2> {strTeam}</h2>
            {/* <h3>Email: {email}</h3> */}
            <Link 
                to={`/teams/${idTeam}`}> <button>Details</button>
            </Link>
        </div>
    );
};

export default Teams;