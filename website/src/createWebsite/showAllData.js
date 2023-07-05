import React from "react";
import { useDispatch } from "react-redux";
import AllRecords from "./AllRecords";
import IdDetails from "./idDetails";
import { byIdDetails } from "./userAction";
import { fetchAllRecords } from "./userAction";


export default function Showalldata() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = document.getElementsByTagName('input');
        let value = obj[0].value;
        fetch('https://dummyjson.com/users/' + value)
            .then(res => res.json())
            .then(x => { dispatch(byIdDetails(x)) })
    }

    const handleSubmit1 = (e) => {
        e.preventDefault();
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            var temp = this.responseText;
            var obj = JSON.parse(temp);
            let data = obj.users;
            dispatch(fetchAllRecords(data));
        }
        xhttp.open("GET", "https://dummyjson.com/users");
        xhttp.send();
    }


    return (
        <>
            <h1>Show Single UserData</h1>
            <form id="mainform1" onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="Enter Id Here" />
                <input type="submit" value="Show Single User Data" />
            </form>

            <IdDetails />

            <h1>Show All Data</h1>
            <form id="mainform2" onSubmit={handleSubmit1}>
                <input type="submit" value="Show All Data" />
            </form>
            <AllRecords />

        </>
    );
}
