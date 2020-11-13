import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "@reach/router";

const Main = (props) => {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/sorted")
            .then(res => setPets(res.data.results))
            .catch(err => console.log(err));
    }, [])

    return (
        // <div className="row">
        //     <div className="col-sm-12">
        //         <h1>Here are all of the products in our system</h1>
        //     </div>
        //     <div className="col-sm-6 text-left">
        //     {
        //     products.map((product, i) => {
        //         return <h3 key={i}>{product.title}</h3>
        //     })
        //     }
        //     </div>
        // </div>
        <div className="container">
            <div className="row">
                <div className="col-9"><h1 >Pet Shelter</h1></div>
                <div className="col"><Link to="/create">add a pet to the shelter</Link></div>
            </div>
            <div className="row"><h3>These pets are looking for a good home</h3></div>
            <table className="table col-8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((p, i) => {
                            return <tr key={i}>
                                        <td>{p.name}</td>
                                        <td>{p.type}</td>
                                        <td>
                                            <Link to={`/edit/${p._id}`} className="btn btn-outline-dark btn-danger mr-2">Edit</Link>
                                            <Link to={`/pet/${p._id}`} className="btn btn-outline-dark btn-info">Show</Link>
                                        </td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Main;