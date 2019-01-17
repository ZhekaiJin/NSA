import React from 'react';
import {ShotChart} from "./ShotChart";
import {CountSlider} from "./CountSlider";
import {Radio, Switch, Row, Col} from "antd";
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
        const {chartType, minCount, displayToolTips} = this.state;

        return (
            <div className="data-view">
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={minCount}
                    displayToolTips={displayToolTips}
                    chartType={chartType}
                />

                <div className="filters">
                    {chartType === "hexbin" ?
                        <Row>
                            <Col offset={3} span={2}>
                                Shots:
                            </Col>
                            <Col span={16}>
                                <CountSlider
                                    value={minCount}
                                    onChange = {_.debounce(this.onMinCountChange, 500)}
                                />
                            </Col>
                        </Row> : null
                    }

                    <Row>
                        <Col offset={3} span={10}>
                            <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={2}>
                            ToolTip:
                        </Col>
                        <Col span={3}>
                            <Switch
                                onChange={this.onTooltipChange}
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}