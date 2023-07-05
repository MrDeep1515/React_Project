import React from "react";

export default function Employee() {

    return (
        <>
            <h1>Employee Data</h1>
            <table id="maintable">
                <tr>
                    <th>Customer ID</th>
                    <th>Contact Name</th>
                    <th>Contact No.</th>
                    <th>Country</th>
                    <th>Feature</th>
                </tr>
                <tr>
                    <td>1. SLCI</td>
                    <td>Sunil Chetri</td>
                    <td>+91 85698 69236</td>
                    <td>India</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>2. AATO</td>
                    <td>Ana Trujillo</td>
                    <td>+44 5345075643</td>
                    <td>Mexico</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>3. AOMO</td>
                    <td>Antonio Moreno</td>
                    <td>+44 2053 6512</td>
                    <td>UK</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>4. TSHY</td>
                    <td>Thomas Hardy</td>
                    <td>+46 72641 63032</td>
                    <td>Sweden</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>5. CABG</td>
                    <td>Christina Berg</td>
                    <td>+65 6724 3744</td>
                    <td>Singapore</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>6. HAMS</td>
                    <td>Hanna Moos</td>
                    <td>+1 650 513 6452</td>
                    <td>USA</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>7. HYPR</td>
                    <td>Harry Potter</td>
                    <td>+(495)11270-13256</td>
                    <td>Russia</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>8. EAWN</td>
                    <td>Emma Watson</td>
                    <td>+021 948 9900</td>
                    <td>South Africa</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>9. JNCA</td>
                    <td>John Cena</td>
                    <td>+81 90 1613 1747</td>
                    <td>Japan</td>
                    <td><button>Update</button></td>
                </tr>
                <tr>
                    <td>10. MAAS</td>
                    <td>Maria Anders</td>
                    <td>+49 80403 27275</td>
                    <td>Germany</td>
                    <td><button>Update</button></td>
                </tr>
            </table>
        </>
    )
}