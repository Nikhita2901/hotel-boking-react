import React, { Component } from 'react'
import bedroom from './images/Bedroom.jpg';
import cafeteria from './images/hotel-photography-cafeteria.jpg';

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Niks Hotel - <i>Feel the comfort</i></h1>
                <div className="row">
                <div className="col-md-6">
                    <img src={bedroom} alt="this is car image" style={{width:"100%"}} />
                    </div>
                    <div className="col-md-6">
                    <img src={cafeteria} alt="this is car image" style={{width:"100%"}}/>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Home
