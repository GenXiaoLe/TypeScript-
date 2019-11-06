import * as React from 'react';
import Select from './index';

interface SearchSelectProps {
    dataSource: Array<any>;
    optionModel: any;
    data?: any;
    suffixIcon?: React.ReactNode | undefined;
    disabled?: boolean;
    placeholder?: boolean;
    isRemote?: boolean;
    mode?: 'multiple';
    filterOption?: ((inputValue: string, option: React.ReactElement) => boolean) | boolean;
    loadMore?: (data: Array<any>) => void;
    onSearch?: (data: string) => void | undefined;
}

export default class SearchSelect extends React.Component<SearchSelectProps> {
    public constructor(props: SearchSelectProps) {
        super(props);
    }

    public render() {
        let { filterOption = this.defaultSearchRule, isRemote = false, ...props } = this.props;
        
        if (isRemote) {
            filterOption = false;
        }

        return (
            <Select filterOption={filterOption} showSearch={true} {...props}></Select>
        )
    }

    private defaultSearchRule = (
        inputValue: string, 
        option: React.ReactElement
    ): boolean => (option.props.children.includes(inputValue));
}