import React from 'react';

import {
    Slider, InputNumber, Row, Col,
} from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: 1,
    }

    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
        this.props.onChange(value);
    }

    render() {
        const { inputValue } = this.state;
        const value = typeof inputValue === 'number' ? inputValue : 0;

        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={2}
                        max={20}
                        onChange={this.onChange}
                        value={value}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={value}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}
