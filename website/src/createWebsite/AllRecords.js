import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AllRecords() {
    const users = useSelector((state) => state.allUsers);
    return (
        <>
            {users && users.length > 0 && <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>City</th>
                    <th>Postal code</th>
                    <th>Card Number</th>
                    <th>Hair Type</th>
                </tr>
                {users && users.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.company.name}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.postalCode}</td>
                            <td>{item.bank.cardNumber}</td>
                            <td>{item.hair.type}</td>
                        </tr>
                    )
                })}
            </table>
            }
        </>

    )
}