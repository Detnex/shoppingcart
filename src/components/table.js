import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Items</th>
        <th>Description</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
	const rows = props.cdata.map((row,index) => {
		return(
             <tr key={index}>
               <td>{row.name}</td>
               <td>{row.job}</td>
               <td>
               <button onClick={() => props.remove(index)}>X</button>
               </td>
             </tr>  
			)
	})
  return (
    <tbody>{rows}</tbody>
  )
}

class Table extends Component {
  render() {
   
   const { cdata,remove } = this.props;

    return (
      <table>
         <TableHeader />
         <TableBody cdata = { cdata } remove = { remove }/>
      </table>
    )
  }
}

export default Table