import React from 'react';

const Form = props => {
    const {inputs, errors, onChangeHandler, onSubmitHandler, submitValue} = props;

    return (
        <div>
            <form noValidate onSubmit={onSubmitHandler} className="border border-dark p-3 needs-validation">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Pet Name:</label>
                            <input name="name" onChange={onChangeHandler} type="text" value={inputs.name} className="form-control" required minLength="3"></input><br />
                            <div className="invalid-feedback">
                            Name is required with minimum length of 3
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Pet Type:</label>
                            <input name="type" onChange={onChangeHandler} type="text" value={inputs.type} className="form-control" required minLength="3"></input><br />
                            <div className="invalid-feedback">
                            Type is required with minimum length of 3
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Pet Description:</label>
                            <input name="description" onChange={onChangeHandler} type="text" value={inputs.description} className="form-control" required minLength="3"></input><br />
                            <div className="invalid-feedback">
                            Description is required with minimum length of 3
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <p>Skills (Optional)</p>
                        <div className="form-group">
                            <label>Skill One:</label>
                            <input name="skillOne" onChange={onChangeHandler} type="text" value={inputs.skillOne} className="form-control"></input><br />
                        </div>
                        <div className="form-group">
                            <label>Skill Two:</label>
                            <input name="skillTwo" onChange={onChangeHandler} type="text" value={inputs.skillTwo} className="form-control"></input><br />
                        </div>
                        <div className="form-group">
                            <label>Skill Three:</label>
                            <input name="skillThree" onChange={onChangeHandler} type="text" value={inputs.skillThree} className="form-control"></input><br />
                        </div>
                    </div>
                </div>
                
                <input type="submit" className="btn btn-outline-dark btn-success" value={submitValue}></input>
            </form>
        </div>
    );
}
export default Form;