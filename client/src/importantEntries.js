import React from "react";
import './ImportantEntries.css';
import Header from "./component/Header";

export default class ImportantEntries extends React.Component {
    render(){
        return(
            <h1 className="container">
                <Header/>
                <div className="feedingEntries">
                    <h2>Feeding</h2>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Type</th>
                            <th>Quantity</th>
                        </tr>
                        <tr>
                            <td>02/02/22</td>
                            <td>2:45 pm</td>
                            <td>Breastfed</td>
                            <td>20 mins</td>
                        </tr>
                        <tr>
                            <td>02/03/22</td>
                            <td>3:00 pm</td>
                            <td>Bottle</td>
                            <td>2.5 oz</td>
                        </tr>
                    </table>
                </div>
                <div className="sleepingEntries">
                    <h2>Sleeping</h2>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Comments</th>
                        </tr>
                        <tr>
                            <td>02/08/22</td>
                            <td>17 hours</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>02/09/22</td>
                            <td>19 hours</td>
                            <td>N/A</td>
                        </tr>
                    </table>
                </div>
                <div className="restroomEntries">
                    <h2>Restroom</h2>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Waste Type</th>
                        </tr>
                        <tr>
                            <td>02/04/22</td>
                            <td>2:45 pm</td>
                            <td>Liquid</td>
                        </tr>
                        <tr>
                            <td>02/07/22</td>
                            <td>3:00 pm</td>
                            <td>Solid</td>
                        </tr>
                    </table>
                </div>
            </h1>
        )
    }
}