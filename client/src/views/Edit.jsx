import React, {useState, useEffect} from "react";
import axios from "axios";
import {navigate, Link} from "@reach/router";
import Form from "../components/Form";

const Edit = props => {
    const intitialPet = {
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }

    const [edit, setEdit] = useState(intitialPet);

    const [errors, setErrors] = useState(intitialPet);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const onChangeHandler = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        setErrors(intitialPet);
        e.preventDefault();
        console.log(edit);
        e.target.className += " was-validated";
        if (e.target.checkValidity()){
            axios.put(`http://localhost:8000/api/update/pet/${edit._id}`, edit)
            .then(res => {
                if(res.data.results){
                    navigate(`/pet/${edit._id}`);
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
            <div className="col"> <h3>Edit {edit.name}</h3></div>
        </div>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} inputs={edit} errors={errors} submitValue="Edit Pet" />
        </div>
    )
}

export default Edit;