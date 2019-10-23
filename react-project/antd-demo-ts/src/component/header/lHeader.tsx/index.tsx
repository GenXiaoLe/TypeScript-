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

export default class LHeader extends React.Component<Props>{
    constructor(props: Props) {
        super(props);

        this.state = {
            btns: this.props.btns
        };

    }

    render() {
        const { btns, btnChange } = this.props;

        return(
            <section>
                <Button shape="round" className="l-header__btn-defalut" onClick={btnChange.bind(this, '保存')}>保存</Button>
                <Button shape="round" className="l-header__btn-defalut" onClick={btnChange.bind(this, '取消')}>取消</Button>
                {(btns || []).map((item, index) => (<Button key={index} shape="round" className="l-header__btn-defalut" onClick={btnChange.bind(this, item)}>{item}</Button>))}
            </section>
        )
    }
}