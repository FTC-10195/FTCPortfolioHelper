import React from 'react'; 
import { useNavigate } from 'react-router-dom';

  

const Team = () => { 

    const history = useNavigate();

    const handleClick = () => { 
        console.log("bru u trippin fr")
        console.log("bro wtf")
        history('./Port')
    }
    
    return(
            <div className ="bg-blue-600  border-white ">
                <p style = {{}}className="text-3xl font-bold col-auto text-white ">Team 10195 Presents Portfolio </p>     
                <a className = ' text-white px-4' target="_blank" href = "https://ecgrobotics.org/ftc10195/">About the Team</a>       
                <a className = 'text-white' target="_blank" href = "https://docs.google.com/forms/d/e/1FAIpQLSdEO4ifptS7LqIjBBJTRyEO3BSJ6wb-KkQPREObv2NO3X1GXg/viewform?embedded=true ">Submit Portfolio</a>       
            </div>
            
        );
}
export default Team ; 