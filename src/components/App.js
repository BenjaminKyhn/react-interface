import '../css/App.css';
import React, {Component} from 'react';
import AddAppointments from './AddAppointments';
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

class App extends Component {
    constructor() {
        super();
        this.state = {
            myAppointments: []
        }
    }

    componentDidMount() {
        fetch('./data.json')
            .then(response => response.json())
            .then(result => {
                const appointments = result.map(item => {
                    return item;
                })
                this.setState({
                    myAppointments: appointments
                })
            })
    }

    render() {

        const listItems = this.state.myAppointments.map(item => (
            <div>{item.petName}</div>
        ))

        return (
            <main className="page bg-white" id="petratings">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 bg-white">
                            <div className="container">
                                {listItems}
                                <AddAppointments/>
                                <SearchAppointments/>
                                <ListAppointments/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

}

export default App;
