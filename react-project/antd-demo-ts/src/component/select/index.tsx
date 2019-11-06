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
    suffixIcon?: React.ReactNode | undefined;
    disabled?: boolean | undefined;
    placeholder?: boolean;
    mode?: 'multiple';
    optionFilterProp?: string | undefined;
    filterOption?: ((inputValue: string, option: React.ReactElement) => boolean) | boolean | undefined;
    showSearch?: boolean | undefined;
    allowClear?: boolean | undefined;
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
                <Option key={index} value={item[optionModel.name]}>{item[optionModel.CNname]}</Option>
            )
        })

        return children;
    }

    public render() {
        const { 
            data = {}, 
            optionModel, 
            placeholder = '请选择', 
            optionFilterProp = 'children', 
            suffixIcon,
            disabled,
            onSearch,
            filterOption,
            allowClear,
            showSearch,
            mode
        } = this.props;

        return (
            <section>
                <Select
                    defaultValue={data[optionModel.name]}
                    placeholder={placeholder}
                    optionFilterProp={optionFilterProp}
                    onPopupScroll={this.selectOnScroll}
                    suffixIcon={suffixIcon}
                    disabled={disabled}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    allowClear={allowClear}
                    showSearch={showSearch}
                    mode={mode}>
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