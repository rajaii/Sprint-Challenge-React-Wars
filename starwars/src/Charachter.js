import React from 'react';

const Charachter = (props) => {
    return (
        <div>
            <ul>Charachter Name: {props.charachterData.name}
                <li>Birth Year: {props.charachterData.birth_year}</li>
                <li>Time of Creation: {props.charachterData.created}</li>
                <li>Editing Time: {props.charachterData.edited}</li>

                <li>Eye Color: {props.charachterData.eye_color}</li>
                <li>Mass: {props.charachterData.mass}</li>
                <li>Skin Color: {props.charachterData.skin_color}</li>
            </ul>

            <ul>Films:
                {props.charachterData.films.map(film => {
                    return (
                        <div>
                            <li>{film}</li>
                        </div>
                    );
                })}
            </ul>

            <ul>Species:
                {props.charachterData.species.map(specie => {
                 return (
                    <li>{specie}</li>
                 );
               })}
            </ul>

            <ul>StarShips:
                {props.charachterData.starships.map(ship => {
                    return (
                        <div>
                            <li>{ship}</li>
                        </div>
                    );
                })}
            </ul>

            <ul>Vehicles:
                {props.charachterData.vehicles.map(vehicle => {
                    return (
                        <div>
                            <li>{vehicle}</li>
                        </div>
                    );
                })}
            </ul>
         
        </div>
    )
}

export default Charachter;