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
      description: 'no data',
      errorMsg: '',
      history: []
    }
    this.getColor = this.getColor.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getColor(){
    Promise.resolve(AirQualityColor(this.state.address)).then((result) => {
      if(result === undefined) {
        this.setState({
          description: 'no data',
          errorMsg: 'There was an error with the input.',
          address: '',
          color: ''
        })
      } else {
        this.setState({
          errorMsg: '',
          color: result.breezoColor,
          description:  result.breezoDescription,
          history: this.state.history.concat([
            {
              color: result.breezoColor,
              address: this.state.address,
              description: result.breezoDescription
            }
          ])
        })
      }
    })
  }

  handleChangeAddress(event) {
    this.setState({
       [event.target.id]: event.target.value
     });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getColor()
  }

  render() {
      const moves = this.state.history.map((step, move) => {
        const desc =  `${this.state.history[move].address}` + " " + `${this.state.history[move].color}`+ " " + `${this.state.history[move].description}`;
        if(move >= 0){
          return (
            <li key={move}>{desc}</li>
          );
        }
      });


    return (
      <div>
        <p className="errorHandling">{this.state.errorMsg}</p>
        <SearchBar onChange={this.handleChangeAddress} onSubmit={this.handleSubmit}/>
        <p>Air Quality: {this.state.description}</p>
        <Swatch value={this.state.color}/>
        <p>Search Results:</p>
        <ul>{moves}</ul>
      </div>
    )
  };
}

export default App;
