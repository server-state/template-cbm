import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import AppBar from './app-bar';

import CBM from '../src';
import sampleData from '../src/sample-data';
import SimpleDashboard from './simple-dashboard';


const defaultData = [{
    name: 'Default',
    data: 'Hello World!'
}];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const data = sampleData || defaultData;
        this.state = {
            data,
            selected: data[0]
        };

        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected(name) {
        for (const dataSet of this.state.data) {
            if (dataSet.name === name) {
                this.setState({
                    selected: dataSet
                });
                return;
            }
        }
    }

    render() {
        return(
            <ThemeProvider theme={theme}>
                <AppBar
                    info={CBM.info}
                    data={this.state.data}
                    selected={this.state.selected}
                    onSelected={this.handleSelected}
                >
                    <SimpleDashboard
                        info={CBM.info}
                        data={this.state.selected.data}
                    >
                        <CBM.component data={this.state.selected.data} />
                    </SimpleDashboard>
                </AppBar>
            </ThemeProvider>
        );
    }
}