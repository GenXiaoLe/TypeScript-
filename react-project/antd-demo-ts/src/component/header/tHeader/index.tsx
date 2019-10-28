import * as React from 'react';
import { Button } from 'antd';

import './index.css';

// export namespace LHeader {
//     export interface Props {
//         btns?: Array<string>;
//         btnChange: (btnName: string) => void
//     }
// }

export interface Props {
    btns?: Array<string>;
    btnChange: (btnName: string) => void
}

export default class THeader extends React.Component<Props>{
    constructor(props: Props) {
        super(props);

        this.state = {
            btns: this.props.btns
        };
    }

    render() {
        const { btns, btnChange } = this.props;

        return(
            <section className="t-header__box">
                <Button className="t-header__btn-defalut" onClick={btnChange.bind(this, '添加')}>添加</Button>
                <Button className="t-header__btn-defalut" onClick={btnChange.bind(this, '删除')}>删除</Button>
            </section>
        )
    }
}