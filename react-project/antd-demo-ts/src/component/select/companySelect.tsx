import * as React from 'react';

import SearchSelect from './searchSelect';

interface CompanySelectProps {
    data?: any;
    disabled?: boolean;
    placeholder?: boolean;
}

interface CompanySelectState {
    dataCompany: Array<any>;
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
            ],
            optionModel: {name: 'companyId', CNname: 'companyName'}
        }
    }

    public loadMore = (data: Array<any>):void => {
        console.log(data);
    }

    public onSearch = (data: string): void => {
        console.log(data);
    }

    render() {
        const { ...props } = this.props;
        const { dataCompany, optionModel } = this.state;

        return (
            <section>
                <SearchSelect 
                    dataSource={dataCompany} 
                    optionModel={optionModel} 
                    loadMore={this.loadMore}
                    onSearch={this.onSearch}
                    {...props}/>
            </section>
        )
    }
}

