import * as React from 'react';

interface userInfoProps {
    name: string,
    age: number
}

export class UserInfo extends React.Component<userInfoProps, {}> {
    render() {
        return (
            <div>
                my name is { this.props.name }, my age is { this.props.age }
            </div>
        );
    }
}