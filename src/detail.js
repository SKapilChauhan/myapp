import React from 'react';
import './App.css';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      list:'',
    }
    console.log(this.props.match.params.id);
 };
 componentDidMount(){
  fetch('http://10.216.2.82/shogee-master/shogee-master/api.php?route=demo/productDescription&id='+ this.state.id)
  .then(result=>result.json())
  .then(resp=> {
    let data = resp.data.Description; 
    this.setState({list:data});  
  });
}
 render(){
  
    return (
      <div className="details">
        {this.state.list}
      </div>
    );
  }
}

export default Details;
