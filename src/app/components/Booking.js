import React, { Component } from 'react';

import RoomDetail from './RoomDetail';
import DateSelector from './DateSelector';
import Billing from './Billing';

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
 
    

class Booking extends Component {
    constructor(props) {
        super(props);

        const today =  new Date();
        const checkout = new Date();
        checkout.setDate(today.getDate() + 1);

        this.state = {
            checkinDate: today,
            checkoutDate: checkout,
            occupants: 1,
            roomType: 'Standard'
        }
    }

    static getDerivedStateFromProps(props, state) {
        const totalDays = dateDiffInDays(state.checkinDate, state.checkoutDate);
        const invalidRange =  (totalDays <= 0 || totalDays >= 10)
        
        return {
            totalDays,
            invalidRange
        }
    }


    onCheckinChange = (checkinDate) => {
        this.setState({
            checkinDate
        })
    }

    onCheckoutChange = (checkoutDate) => {
        this.setState({
            checkoutDate
        })
    }


    onOccupantsChange = (occupants) => {
        this.setState({
            occupants
        })
    }
     

    onRoomTypeChange = (roomType) => {
        this.setState({
            roomType
        })
    }
     
    confirmBooking () {
        alert("Booking successful");
    }
    
    render() {
        return (
            <div>
                <h3 style={{textAlign:"center", fontStyle:"normal",backgroundColor:"#D79922"}}>BOOK ROOMS HERE <i style={{ font:"caption"}}></i></h3>
                <div className="row" >                    
                    <div className="col-md-1"></div>
                   <div className="col-md-5" >
                   <DateSelector checkinDate = {this.state.checkinDate} 
                              checkoutDate = {this.state.checkoutDate}
                              totalDays = {this.state.totalDays}
                              invalidRange = {this.state.invalidRange}
                              onCheckinChange = {this.onCheckinChange}
                              onCheckoutChange = {this.onCheckoutChange}
                />
                <RoomDetail occupants={this.state.occupants}
                            roomType={this.state.roomType}
                            onRoomTypeChange = {this.onRoomTypeChange}
                            onOccupantsChange = {this.onOccupantsChange}
                
                />
                <br></br>
                <button className="btn btn-primary" style={{float:"right"}}onClick={this.confirmBooking}>Confirm Booking</button>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                    { !this.state.invalidRange 
                    && 
                    <Billing roomType={this.state.roomType}
                              totalDays = {this.state.totalDays} 
                              occupants = {this.state.occupants}
                              /> }
                </div>
                </div>
            </div>
        );
    }
}

export default Booking;