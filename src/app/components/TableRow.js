import React from 'react';

class TableRow extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rowindex : props.rowindex ,
            index: props.row.index,
            name: props.row.name,
            job:props.row.job
        }

        this.removeRow = this.removeRow.bind(this)
    }  

    removeRow(){
        this.props.handleRemove(this.state.index)
    }

    render() {
        return (
            <tr>
                <td>{this.state.rowindex }</td>
                <td>{this.state.name}</td>
                <td>{this.state.job}</td>
                <td><button onClick={this.removeRow}>&times;</button></td>
            </tr>
        )
    }
}

export default TableRow