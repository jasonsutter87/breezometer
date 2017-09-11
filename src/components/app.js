import React from 'react';
import SearchBar from './searchBar';
import SearchResults from './SearchResults';
import CurrentSearchResult from './CurrentSearchResult';
import AirQualityResult from '../api/AirQualityResult';
import * as Actions from '../actions';
import { connect } from 'react-redux';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAddress(event) {
    if(this.props.errorMsg.length !== 0){
      this.props.changeErrorMessage('')
    }
    this.props.changeAddress(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.address !== ''){
      this.getColor()
    }
  }

  getColor() {
    Promise.resolve(AirQualityResult(this.props.address))
    .then((result) => {
      if ( result === undefined) {
        this.props.changeErrorMessage('Error, There was a problem with your input.')
      } else if (result === 'off-line') {
          this.props.changeErrorMessage('Error, Can not make requests while offline.')
      } else if (result === 'locationError') {
          this.props.changeErrorMessage('Error, Provided location is unsupported.')
      } else {
        this.props.changeErrorMessage('')
        this.props.fetchAirQualitySuccess(result.breezoColor, result.breezoDescription, result.breezoAqi)
        this.props.addToHistory(this.props.address, result.breezoColor, result.breezoDescription, result.breezoAqi)
      }
    })
  }

  render() {
    const { history, errorMsg } = this.props;
    return (
    <div>
      <div className="title-bar">
        <h1 id="main-title">Clean Air</h1>
        <h1 id="main-subtitle">Your air matters</h1>
      </div>
      <div>
        <SearchBar
          onChange={this.handleChangeAddress}
          onSubmit={this.handleSubmit}
        />
      </div>
      <div>
        <CurrentSearchResult
          errorMsg={errorMsg}
          history={history}
        />
      </div>
      <div>
         <SearchResults history={history} />
      </div>
    </div>
    )
  };
}

function mapStateToProps (state){
  return {
    history: state.history,
    address: state.address,
    errorMsg: state.errorMsg
  }
}

export default connect(
  mapStateToProps,
  Actions
)(App);
