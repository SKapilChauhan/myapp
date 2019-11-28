import React from 'react';
import { Link } from 'react-router-dom';
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
    fetch('http://10.216.2.82/shogee-master/shogee-master/api.php?route=demo')
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
      </div>
    );
  }
}

export default List;
