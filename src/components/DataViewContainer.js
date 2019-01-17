import React from 'react';
 import {ShotChart} from "./ShotChart";
 import {CountSlider} from "./CountSlider";

  export class DataViewContainer extends React.Component {
     render () {
         return (
             <div className="data-view">
                 <ShotChart
                     playerId={this.props.playerId}
                     minCount={2}
                     displayToolTips={true}
                     chartType="hexbin"
                 />
                 <CountSlider/>
             </div>
         );
     }
 }
