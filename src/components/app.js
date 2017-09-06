import React from 'react';
import SearchBar from './searchBar';
import Swatch from './colorSwatch';
import AirQualityColor from '../api/airQualityColor';
import * as Actions from '../actions';
import { connect } from 'react-redux';

class App extends React.Component{
  handleChangeAddress(event) {
    this.props.changeAddress(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getColor()
  }

  getColor() {
    const historyLength = this.props.history.length - 1
    Promise.resolve(AirQualityColor(this.props.history[historyLength].address))
    .then((result) => {
      if(result === undefined) {
        console.log('ERROR ERROR')
        this.props.changeDescription('no data')
        this.props.changeErrorMessage('Error, the address or city was not inputted correctly')
        this.props.changeAddress('')
        this.props.changeColor('')

      } else {
        this.props.changeErrorMessage('')
        this.props.changeColor(result.breezoColor)
        this.props.changeAqi(result.breezoAqi)
        this.props.changeDescription(result.breezoDescription)
        this.props.addToHistory(this.props.address, result.breezoColor, result.breezoDescription, result.breezoAqi, this.props.errorMsg)
      }
    })
  }
  
  render() {
    const { history } = this.props;
      const searchHistory = history.map((step, index) => {
        const description =  `${history[index].address}${' '}${history[index].color}${' '}${history[index].description}${' '}${history[index].aqi}`;
        if(index > 0){
          return (
            <li key={index}>{description}</li>
          );
        }
        return searchHistory;
      });

    return (
      <div>
        <p className="errorHandling">{this.props.errorMsg}</p>
        <SearchBar onChange={(e) => this.handleChangeAddress(e)} onSubmit={(e) => this.handleSubmit(e)}/>
        <p>Air Quality: {this.props.description}</p>
        <Swatch value={this.props.color}/>
        <p>Search Results:</p>
        <ul>{searchHistory}</ul>
      </div>
    )
  };
}

function mapStateToProps (state){
  return {
    history: state.history
  }
}

export default connect(
  mapStateToProps,
  Actions
)(App);
