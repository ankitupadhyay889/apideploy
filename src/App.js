import React, { useEffect, useState } from 'react';
import {Table} from "react-bootstrap";
import "./App.css";

const ApiCall = () => {

    const [data, setdata] = useState([]);

    const loadData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const acct = await res.json();
      setdata(acct);
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div className="cs mt-5">
            <h1> Data Table API </h1>
            <Table striped bordered hover className="mt-5">
                <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Website</th>
                    <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,id) => {
                            return(
                                <tr key={id}>
                                    <td> {item.id} </td>
                                    <td> {item.name} </td>
                                    <td> {item.email} </td>
                                    <td> {item.username} </td>
                                    <td> {item.website} </td>
                                    <td> {item.phone} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ApiCall;