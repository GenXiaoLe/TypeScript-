import * as React from 'react';

import Dialog from './index';

interface SearchDialogProps {
    visibility: boolean;
    heardTitle?: string;
    onChange: (data: any) => void;
}


export default class SearchDialog extends React.Component<SearchDialogProps> {
    public constructor(props: SearchDialogProps) {
        super(props);
    }

    public render() {
        const { ...props } = this.props;

        return (
            <Dialog {...props}>
                111
            </Dialog>
        )
    }
}