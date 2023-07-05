import React from "react";

export default function Dashboard() {

    const [fnameError, setfnameError] = React.useState('');
    const [mnameError, setmnameError] = React.useState('');
    const [lnameError, setlnameError] = React.useState('');
    const [dobError, setdobError] = React.useState('');
    const [mobileError, setmobileError] = React.useState('');
    const [addressError, setaddressError] = React.useState('');
    const [user, setUser] = React.useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        mobileNo: '',
        address: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.firstName == '') {
            setfnameError('*Please Enter First Name')
        }// First Name

        if (user.middleName == '') {
            setmnameError('*Please Enter Middle Name')
        }// Middle Name

        if (user.lastName == '') {
            setlnameError('*Please Enter Last Name')
        }// Last Name

        if (user.dob == '') {
            setdobError('*Please Enter Date Of Birth')
        }// Date Of Birth

        if (user.mobileNo == '') {
            setmobileError('*Please Enter Mobile No.')
        } // Mobile No.

        if (user.address == '') {
            setaddressError('*Please Enter Address')
        }// Address
        else {
            console.log(user)
        }


    }

    return (
        <>
            <h1> Dashboard</h1>
            <form id="form7" onSubmit={handleSubmit}>
                <h2><u><i>Registration Form</i></u></h2><br></br>
                <input type="text" name="firstName" placeholder="Enter First Name Here" onChange={handleChange} /><br></br>
                <span>{fnameError}</span><br></br>
                <input type="text" name="middleName" placeholder="Enter Middle Name Here" onChange={handleChange} /><br></br>
                <span>{mnameError}</span><br></br>
                <input type="text" name="lastName" placeholder="Enter Last Name Here" onChange={handleChange} /><br></br>
                <span>{lnameError}</span><br></br>
                <input type="text" name="dob" placeholder="Enter Date Of Birth Here" onChange={handleChange} /><br></br>
                <span>{dobError}</span><br></br>
                <input type="text" name="mobileNo" placeholder="Enter Mobile No. Here" onChange={handleChange} /><br></br>
                <span>{mobileError}</span><br></br>
                <input type="textr" name="address" placeholder="Enter Address Here" onChange={handleChange} /><br></br>
                <span>{addressError}</span><br></br>
                <input type="submit" value="Register" />
            </form>
        </>
    )
}
