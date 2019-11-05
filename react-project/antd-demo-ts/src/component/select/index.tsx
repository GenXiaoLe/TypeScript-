import * as React from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface OptionItem {
    name: string,
    CNname: string,
}

interface SelectBasicProps {
    dataSource: Array<any>;
    optionModel: OptionItem;
    data?: any;
    disabled?: boolean;
    placeholder?: boolean;
    optionFilterProp?: string | undefined;
    filterOption?: ((inputValue: string, option: React.ReactElement) => boolean) | boolean | undefined;
    showSearch?: boolean;
    allowClear?: boolean;
    loadMore?: (data: Array<any>) => void | undefined;
    onSearch?: (data: string) => void | undefined;
}

interface SelectBasicState {
    isBottom: boolean
}

export default class SelectBasic extends React.Component<SelectBasicProps, SelectBasicState>{
    public constructor(props: SelectBasicProps) {
        super(props);

        this.state = {
            isBottom: false
        }

        this.selectOnScroll = this.selectOnScroll.bind(this);
    }

    public createOption = (): Array<React.ReactNode> => {
        const children: Array<React.ReactNode> = [];
        const { dataSource, optionModel } = this.props;

        dataSource.forEach((item: any, index: number) => {
            children.push(
                <Option key={Math.random()} value={item[optionModel.name]}>{item[optionModel.CNname]}</Option>
            )
        })

        return children;
    }

    public render() {
        const { data = {}, onSearch = undefined, showSearch = false, allowClear = false, optionModel, disabled = false, placeholder = '请选择', optionFilterProp = 'children', filterOption = true } = this.props;

        return (
            <section>
                <Select
                    defaultValue={data[optionModel.name]}
                    showSearch={showSearch}
                    disabled={disabled} 
                    placeholder={placeholder}
                    optionFilterProp={optionFilterProp}
                    filterOption={filterOption}
                    allowClear={allowClear}
                    onPopupScroll={this.selectOnScroll}
                    onSearch={onSearch}>
                    {this.createOption()}
                </Select>
            </section>
        )
    }

    private selectOnScroll(event: React.UIEvent<HTMLDivElement>): void {
        const _target: EventTarget = event.target;
        const { isBottom } = this.state;
        const { loadMore, dataSource } = this.props;

        if (_target instanceof Element && !isBottom) {
            if (_target.scrollTop + _target.clientHeight === _target.scrollHeight) {
                let self: any = this; 
                this.setState({ isBottom: true }, function() {
                    self.state.isBottom = false;
                });
                
                if (loadMore) {
                    loadMore(dataSource);
                }
            }
        }
    }
}