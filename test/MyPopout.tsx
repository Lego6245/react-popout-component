import * as React from 'react';
import Popout from '../index';

const styles = require('./MyPopout.css');

export default class MyPopout extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { newStyle: false };
    }

    render() {
        const className = this.state.newStyle ? 'new' : 'old';

        return (
            <Popout
                hidden={this.props.hidden}
                html={`<!DOCTYPE html><html dir='ltr'><body class='${styles.popout}'></body></html>`}
                onClose={() => this.props.onClose(this.props.name)}
                options={{
                    resizable: true,
                }}>
                <div>
                    <h1 className={className}>
                        {this.props.message} {this.props.name} {this.state.newStyle ? 'new' : 'old'}
                    </h1>
                    <button onClick={() => this.setState({ newStyle: !this.state.newStyle })}>
                        Toggle Style
                    </button>
                </div>
            </Popout>
        );
    }
}
