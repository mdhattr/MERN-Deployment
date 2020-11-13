import React, {useState} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate, Link } from "@reach/router";

const Create = (props) => {

    const intitialPet = {
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }

    const [pet, setPet] = useState(intitialPet);

    const [errors, setErrors] = useState(intitialPet);
    

    const onChangeHandler = (e) => {
        e.preventDefault();
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(pet);
        e.target.className += " was-validated";
        if (e.target.checkValidity()){
            axios.post("http://localhost:8000/api/create/pet", pet)
            .then(res => {
                if(res.data.results){
                    navigate("/");
                } else{
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err))
        }
        
    }

    return(
        <div>
            <div className="row">
            <div className="col-9"><h1 >Pet Shelter</h1></div>
            <div className="col"><Link to="/">back to home</Link></div>
            </div>
        <div className="row">
            <div className="col"> <h3>Know a pet needing a home?</h3></div>
        </div>

            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} inputs={pet} errors={errors} submitValue="Add a Pet" />
        </div>
    )
}

export default Create;