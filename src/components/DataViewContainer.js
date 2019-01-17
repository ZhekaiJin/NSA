import React from 'react';
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider";
import {Radio, Switch} from "antd";
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: "hexbin",
        displayToolTips: true
    }

    onMinCountChange = (minCount) => {
        this.setState({minCount});
    }

    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value,
        });
    }

    onTooltipChange = (displayToolTips) => {
        this.setState({displayToolTips});
    }

    render () {
        const {chartType} = this.state;

        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={2}
                    displayToolTips={true}
                    chartType="hexbin"
                />
                <CountSlider
                    onChange = {_.debounce(this.onMinCountChange, 500)}
                />
                <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>
                </RadioGroup>
                <Switch
                    onChange={this.onTooltipChange}
                    checkedChildren="On"
                    unCheckedChildren="Off"
                    defaultChecked
                />
            </div>
        );
    }
}
