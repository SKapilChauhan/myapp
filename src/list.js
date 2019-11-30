import React from 'react';
import { Link, Route } from 'react-keeper';
import './App.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:'',
    }
    console.log(this.props);
 };
 componentDidMount(){
    fetch('https://app.shogee.com/api.php?route=demo')
    .then(result=>result.json())
    .then(resp=> {
      let data = resp.data.map((item, index) => {
          return(
            <div key={index}>
              <Link className="list" to={'/details/'+ item.Prod_id} >
                 {item.name}
              </Link>
            </div>
          )
      })
      this.setState({list:data});
    });
 }
 render(){
    return (
      <div className="listing">
          {this.state.list}
          <div>
              <Link className="list" to={'/details/3'} >
                Product 4   
              </Link>
            </div>
      </div>
    );
  }
}

export default List;
