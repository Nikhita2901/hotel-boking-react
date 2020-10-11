import React from 'react';
import TableRow from './TableRow';
import Booking from './Booking';


class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: [{index: 0, name: "Sindhu", job:"Owner"},{index: 1, name: "Prakash", job:"Manager"}, {index: 2, name: "Namratha", job:"Receptionist"},{index: 3, name: "Nikhita", job:"Receptionist"}],
            rowIndex: 1,
            name:'',
            job:''
        }

        this.addRow = this.addRow.bind(this)
        this.removeRow = this.removeRow.bind(this)
    }

   addRow () {
        var {rows, rowIndex} = this.state
        rows[rowIndex] = {index: rowIndex, name: this.state.name, job:this.state.job};
        rowIndex = rowIndex + 1;
        this.setState({rows, rowIndex}) 
        // Or 
        // this.setState({rows: rows, rowIndex : rowIndex})
    }

    removeRow(index){
        var {rows} = this.state
        if(rows.length > 1){
            rows.splice(index, 1);
        }

        this.setState({rows})
    }

    handleUsernameChange = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    handleJobChange = (event) => {
        this.setState({
            job : event.target.value
        })
    }

    render() {
        return (
            <div>
                <h3 style={{textAlign:"center", fontStyle:"normal",backgroundColor:"#D79922"}}>HOTEL STAFF DETAILS <i style={{ font:"caption"}}></i></h3>
                <div className="row">
                <div className="col-md-1"></div>
            <div className="col-md-5">
                <div className="table-responsive">
                   <table className="table">
                    <thead>
                        <tr>
                            <th>Sl.No.</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rows.map((row, index) => 
                                <TableRow key={index} row={row} rowindex = {index + 1} handleRemove={this.removeRow}></TableRow>
                            )
                        }

                    </tbody>
                  </table>
               </div>
              </div>              
              <div className="col-md-5">
                  <h3>Add new staff details</h3>
                  <div className="form-group">
                      <label style={{float:"left"}}>Name</label>
                      <input type='text' className="form-control" value={this.state.name} onChange={this.handleUsernameChange}/>
                  </div>
                  <div className="form-group">
                      <label style={{float:"left"}}>Designation</label>
                      <input type='text' className="form-control" value={this.state.job} onChange={this.handleJobChange}/>
                  </div>
                 <button className="btn btn-primary" style={{float:"right"}} onClick={this.addRow}>Submit</button>
              </div>  
            </div>
            </div>
            
        )
    }
}

export default Table

