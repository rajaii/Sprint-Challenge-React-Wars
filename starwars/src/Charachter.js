import React from 'react';

const Charachter = (props) => {
    const noVehicle =  
        
            <div className='sublists name_items forMargins'>
               <li>No Vehicles: try again next year.</li> 
            </div>;
            
    const noStarship = 
            <div className='sublists name_items forMargins'>
               <li>No Starships: try again next year.</li> 
            </div>;
           
        

    return (
        <div className='motherFlex'>
            
            <ul className='name'>
                <li className='name_items' className='name'>Charachter Name: {props.charachterData.name}</li>
                <li className='name_items forMargins'>Birth Year: {props.charachterData.birth_year}</li>
                <li className='name_items forMargins'>Time of Creation: {props.charachterData.created}</li>
                <li className='name_items forMargins'>Editing Time: {props.charachterData.edited}</li>
                <li className='name_items forMargins'>Eye Color: {props.charachterData.eye_color}</li>
                <li className='name_items forMargins'>Mass: {props.charachterData.mass}</li>
                <li className='name_items forMargins'>Skin Color: {props.charachterData.skin_color}</li>
            </ul>

            <ul className='name'>Films:
                {props.charachterData.films.map(film => {
                    return (
                        <div>
                            <li className='sublists name_items forMargins'>{film}</li>
                        </div>
                    );
                })}
            </ul>

            <ul className='name'>Species:
                {props.charachterData.species.map(specie => {
                 return (
                    <li className='sublists name_items forMargins'>{specie}</li>
                 );
               })}
            </ul>

            <ul className='name'>StarShips:

            {props.charachterData.starships.length === 0 ? noStarship : null}
                {props.charachterData.starships.map(ship => {
                    return (
                        <div>
                            <li className='sublists name_items forMargins'>{ship}</li>
                        </div>
                    );
                })}
            </ul>

            <ul className='name'>Vehicles:
                
                {props.charachterData.vehicles.length === 0 ? noVehicle : null}
                       

                {props.charachterData.vehicles.map(vehicle => {
                    return (
                        <div>
                            <li className='sublists name_items forMargins'>{vehicle}</li>
                        </div>
                    );
                })}
            </ul>
        
         
        </div>
    )
}

export default Charachter;