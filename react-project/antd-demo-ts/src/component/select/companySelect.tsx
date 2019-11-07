import * as React from 'react';
import { Icon } from 'antd';

import SearchSelect from './searchSelect';

interface CompanySelectProps {
    data?: any;
    disabled?: boolean;
    placeholder?: boolean;
    mode?: 'multiple';
    onChange?: (value: string, option: React.ReactElement) => void | undefined;
}

interface CompanySelectState {
    dataCompany: Array<any>;
    dataCompanyCopy: Array<any>;
    optionModel: any;
}

export default class CompanySelect extends React.Component<CompanySelectProps, CompanySelectState> {
    public constructor(props: CompanySelectProps) {
        super(props);

        this.state = {
            dataCompany: [
                {id: 0, companyId: 1, companyName: 'a'}, 
                {id: 1, companyId: 2, companyName: 'b'},
                {id: 2, companyId: 3, companyName: 'ca'},
                {id: 3, companyId: 4, companyName: 'd'},
                {id: 4, companyId: 5, companyName: 'ea'},
                {id: 5, companyId: 6, companyName: 'f'},
                {id: 6, companyId: 7, companyName: 'g'},
                {id: 7, companyId: 8, companyName: 'h'},
                {id: 8, companyId: 9, companyName: 'i'},
                {id: 9, companyId: 10, companyName: 'j'},
            ],
            dataCompanyCopy: [
                {id: 0, companyId: 1, companyName: 'a'}, 
                {id: 1, companyId: 2, companyName: 'b'},
                {id: 2, companyId: 3, companyName: 'ca'},
                {id: 3, companyId: 4, companyName: 'd'},
                {id: 4, companyId: 5, companyName: 'ea'},
                {id: 5, companyId: 6, companyName: 'f'},
                {id: 6, companyId: 7, companyName: 'g'},
                {id: 7, companyId: 8, companyName: 'h'},
                {id: 8, companyId: 9, companyName: 'i'},
                {id: 9, companyId: 10, companyName: 'j'},
            ],
            optionModel: {name: 'companyId', CNname: 'companyName'}
        }
    }

    public loadMore = (data: Array<any>):void => {
        console.log(data);
    }

    public onSearch = (data: string): void => {
        let { dataCompany, dataCompanyCopy } = this.state;
        if (data) {
            dataCompany = dataCompanyCopy.filter(i => i.companyName.includes(data));
        } else {
            dataCompany = JSON.parse(JSON.stringify(dataCompanyCopy));
        }

        this.setState({
            dataCompany,
            dataCompanyCopy
        })
    }

    render() {
        const { ...props } = this.props;
        const { dataCompany, optionModel } = this.state;

        // suffixIcon={<Icon type="dash" />}

        return (
            <section>
                <SearchSelect 
                    dataSource={dataCompany} 
                    optionModel={optionModel} 
                    loadMore={this.loadMore}
                    onSearch={this.onSearch}
                    isRemote={true}
                    {...props}/>
            </section>
        )
    }
}

