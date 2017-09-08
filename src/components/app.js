import React from 'react';
import SearchBar from './searchBar';
import GetSearchResults from './GetSearchResults';
import GetCurrentSearchResult from './GetCurrentSearchResult';
import AirQualityColor from '../api/airQualityColor';
import * as Actions from '../actions';
import { connect } from 'react-redux';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAddress(event) {
    this.props.changeAddress(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getColor()
  }

  getColor() {
    const historyLength = this.props.history.length - 1
    Promise.resolve(AirQualityColor(this.props.address))
    .then((result) => {
        this.props.changeErrorMessage('')
        this.props.changeColor(result.breezoColor)
        this.props.changeAqi(result.breezoAqi)
        this.props.changeDescription(result.breezoDescription)
        this.props.addToHistory(this.props.address, result.breezoColor, result.breezoDescription, result.breezoAqi, this.props.errorMsg)
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
        <p className="error-handling">{errorMsg}</p>
      </div>
      <div>
        <SearchBar
          onChange={this.handleChangeAddress}
          onSubmit={this.handleSubmit}
        />
      </div>
      <div>
         <GetCurrentSearchResult history={history} />
      </div>
      <div>
         <GetSearchResults history={history} />
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


//
