import React, {Component} from 'react'

function Search(props){
    return (
        <div> Search By Sandwhich: <input onChange={(e) => props.searchFunction(e.target.value)} type="text" placeholder="Enter Sandwhich Here!"/></div>
    )
}

export default Search