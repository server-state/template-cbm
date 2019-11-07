import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import AppBarTemporary from './components/app-bar-temporary';
import AppBarResponsive from './components/app-bar-responsive';
import SimpleDashboard from './components/simple-dashboard';

import CBM from '../src';
import sampleData from '../src/sample-data';


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

    handleSelected(selectedName) {
        this.setState({
            selected: this.state.data.find(({ name }) => name === selectedName)
        });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                {/* Temporary Drawer */}
                {/* <AppBarTemporary
                    info={CBM.info}
                    data={this.state.data}
                    selected={this.state.selected}
                    onSelected={this.handleSelected}
                />
                <SimpleDashboard
                    info={CBM.info}
                >
                    <CBM.component data={this.state.selected.data} />
                </SimpleDashboard> */}

                {/* Persistent Drawer */}
                <AppBarResponsive
                    info={CBM.info}
                    data={this.state.data}
                    selected={this.state.selected}
                    onSelected={this.handleSelected}
                >
                    <SimpleDashboard
                        info={CBM.info}
                    >
                        <CBM.component data={this.state.selected.data} />
                    </SimpleDashboard>
                </AppBarResponsive>
            </ThemeProvider>
        );
    }
}