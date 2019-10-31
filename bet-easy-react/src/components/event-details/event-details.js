import React, { Component } from 'react';
import BetEasyLogo from '../../shared/svg/icons/bet-easy-logo';
import Racing from '../../shared/svg/icons/racing';
import './event-details.css';
import FilterHorseRacing from '../../shared/svg/icons/filter-horse-racing';
import FilterDogRacing from '../../shared/svg/icons/filter-dog-racing';
import FilterHarnessRacing from '../../shared/svg/icons/filter-harness-racing';
import Moment from 'react-moment';
class EventDetails extends Component {

  state = {
    bets: []
  }

  render() {

    return <div className="container">
              <div className="row">
                <div className="col-6 col-lg-2 col-2 col-md-2 border border-top-0 pt-2">
                  <BetEasyLogo></BetEasyLogo>
                </div>
                <div className=" col-4 col-lg-1 pt-3 px-4  border border-top-0 border-left-0">
                  <Racing></Racing>
                  <p className="text-center font-weight-bold">Racing</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-3 theme rounded-top">
                  <p className="text-left text-white p-2">Next to Jump</p>
                </div>
                </div>
                <div className="col-12 col-lg-3 px-0 py-0 row">
                    <a className="button-theme theme-font-color col font-weight-bold m-1 p-0 pt-3 py-0 rounded"> All </a>
                    <a onClick="" className="button-theme col m-1 px-0 rounded"><FilterHorseRacing></FilterHorseRacing></a>
                    <a className="button-theme col m-1 px-0 rounded"><FilterDogRacing></FilterDogRacing></a>
                    <a className="button-theme col m-1 px-0 rounded"><FilterHarnessRacing></FilterHarnessRacing></a>
                </div>
                <div className="col-12 col-lg-3 px-0 py-0 row">
                { this.state.bets.map((bet) => (
                  <div className="w-100 d-flex justify-content-between border border-left-0 border-right-0 border-top-0 m-1 pb-1">
                     <div className="pt-1 col-2 col-lg-2 pl-0">
                        { bet.EventType.Slug === 'mountaineer-park' ? ( <FilterHorseRacing></FilterHorseRacing> ) : ('') }
                        { bet.EventType.Slug === 'horse-racing' ? ( <FilterHorseRacing></FilterHorseRacing> ) : ('') }
                        { bet.EventType.Slug === 'greyhound-racing' ? ( <FilterDogRacing></FilterDogRacing> ) : ('') }
                        { bet.EventType.Slug === 'harness-racing' ? ( <FilterHarnessRacing></FilterHarnessRacing>) : ('') }
                     </div> 
                     <div className="col-8 col-sm col-lg-5 px-0">
                       <p className="text-sm">{ bet.EventName }</p>
                       <p className="text-sm">{ bet.Venue.Venue }</p>
                     </div>
                     <div className="col-4 col-lg-2 mx-0 pt-1 pt-lg-1 px-0">
                       <span className="text-danger">
                        <Moment fromNow ago>{ bet.AdvertisedStartTime }</Moment>
                       </span>
                     </div>
                  </div>
                  ))}
                </div>
              </div>
  }

  componentDidMount() {
    fetch('http://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump')
    .then(res => res.json())
    .then((data) => {
      this.setState({ bets: data.result })
    })
    .catch(console.log)

  }
}

export default EventDetails;
