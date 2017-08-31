import React from 'react';
import SearchBar from './searchBar';
import Swatch from './colorSwatch';
import AirQualityColor from '../api/airQualityColor';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      address: '',
      color: '',
      description: 'no data'
    }
    this.getColor = this.getColor.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getColor(){
    Promise.resolve(AirQualityColor(this.state.address)).then((result) => {
      this.setState({
        color: result.breezoColor,
        description:  result.breezoDesciption
      })
    })
  }

  handleChangeAddress(event) {
    this.setState({
       address: event.target.value
     });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getColor()
  }

  render() {
    return (
      <div onSubmit={this.handleSubmit} onChange={this.handleChangeAddress}>
        <SearchBar />
        <p>Air Quality: {this.state.description}</p>
        <Swatch value={this.state.color}/>
      </div>
    )
  };
}

export default App;
