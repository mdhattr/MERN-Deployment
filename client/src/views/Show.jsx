import React, {useState, useEffect} from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Show = props => {
    const [pet, setPet] = useState({
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const destroyPet =() => {
        axios.delete(`http://localhost:8000/api/destroy/pet/${props.id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
        }
    return(
        <div className="container">
        <div className="row">
            <div className="col-9"><h1 >Pet Shelter</h1></div>
            <div className="col"><Link to="/">back to home</Link></div>
            </div>
        <div className="row">
            <div className="col"> <h3>Details about: {pet.name}</h3></div>
            <div className="col"><div className="btn btn-outline-danger btn-danger text-white" onClick={destroyPet}>Adopt {pet.name}</div></div>
        </div>
        <div className="pl-5 py-3 col-8 border border-dark mt-5">
            <p>Pet Type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <h3>Skills</h3>
            <ul>
                <li>{pet.skillOne}</li>
                <li>{pet.skillTwo}</li>
                <li>{pet.skillThree}</li>
            </ul>

    
        </div>
        </div>
    );
}

export default Show;