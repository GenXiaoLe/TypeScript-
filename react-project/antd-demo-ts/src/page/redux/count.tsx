import * as React from 'react';
import CountRedux from './component/count.connect';

export default class Count extends React.Component{
    render() {
        return <CountRedux />
    }
}