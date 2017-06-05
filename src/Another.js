import React, { Component } from 'react';
import './App.css';

class Another extends Component {
    render() {
        const welcome = 'Welcome ';
        let name = "Brito Lindo!!!"
        const total = welcome + name;
        const list = [
          {
            title: 'React',
            url: 'https://facebook.github.io/react/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0
          }, {
            title: 'Redux',
            url: 'https://github.com/reactjs/redux',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1
          }
        ];

        return (
        <div className = "App">
          <div> {total} </div>
          <h3> { list.map(function(item) {
                  return (
                      <div key={item.objectID}>
                        <span><a href={item.url}><br/>{item.title} </a></span>
                        <br/><span>Authors: {item.author} </span>
                        <span><br/>Comments: {item.num_comments} </span>
                        <br/><span>Authors: {item.author} </span>  
                        <span>{item.points} </span>
                      </div>                       
                  );
              })} 
          </h3>
        </div>
        );
    }
}

export default Another;
