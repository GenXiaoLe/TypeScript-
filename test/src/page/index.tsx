import * as React from 'react';
import { UserInfo } from '../component/useInfo';

export class FirstPage extends React.Component {
    render() {
        return(
            <section>
                <UserInfo name="liang" age={12} />
            </section>
        )
    }
}