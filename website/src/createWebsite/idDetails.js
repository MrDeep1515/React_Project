import React from "react";
import { useSelector } from "react-redux";

export default function IdDetails(props) {
    const singleUser = useSelector((state) => state.singleUser);
    return (
        <table border="1">
            {singleUser.id && <tbody>
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
                <tr>
                    <td>{singleUser.firstName}</td>
                    <td>{singleUser.lastName}</td>
                    <td>{singleUser.email}</td>
                    <td>{singleUser.company.name}</td>
                    <td>{singleUser.address.city}</td>
                    <td>{singleUser.address.postalCode}</td>
                    <td>{singleUser.bank.cardNumber}</td>
                    <td>{singleUser.hair.type}</td>
                </tr>
            </tbody>}
        </table>
    )
}