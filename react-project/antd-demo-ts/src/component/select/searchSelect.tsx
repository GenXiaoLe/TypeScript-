import * as React from 'react';
import Select from './index';

interface SearchSelectProps {
    dataSource: Array<any>,
    optionModel: any,
    data?: any,
    disabled?: boolean,
    placeholder?: boolean,
    filterOption?: ((inputValue: string, option: React.ReactElement) => boolean) | boolean
    loadMore?: (data: Array<any>) => void,
    onSearch?: (data: string) => void | undefined;
}

export default class SearchSelect extends React.Component<SearchSelectProps> {
    public constructor(props: SearchSelectProps) {
        super(props);
    }

    public render() {
        const { filterOption = this.defaultSearchRule, ...props } = this.props;

        return (
            <Select filterOption={filterOption} showSearch={true} {...props}></Select>
        )
    }

    private defaultSearchRule = (
        inputValue: string, 
        option: React.ReactElement
    ): boolean => (option.props.children.includes(inputValue));
}