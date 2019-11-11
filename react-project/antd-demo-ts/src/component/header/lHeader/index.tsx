import * as React from 'react';
import { Button, Row, Col } from 'antd';

import './index.css';

export interface LHeaderProps {
    leftLayout?: Array<React.ReactElement>;
    rightLayout?: Array<React.ReactElement>;
}

export default class LHeader extends React.Component<LHeaderProps>{
    constructor(props: LHeaderProps) {
        super(props);
    }

    render() {
        const { leftLayout = [], rightLayout = [] } = this.props;

        return(
            <section className="l-header__box">
                <Row type="flex" justify="space-between" gutter={24}>
                    <Col>
                        {leftLayout}
                    </Col>
                    <Col>
                        {rightLayout}
                    </Col>
                </Row>
            </section>
        )
    }
}