import React, { Component } from 'react'
export class Book extends Component {
    render() {
        return (
            <div>
              <ul>
               {this.props.array.map( arr => <li> {arr} </li> )}
             </ul>
             
            </div>
        )
    }
}