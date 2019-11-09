import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import DrawerContent from './components/drawer-content';
import AppBar from './components/app-bar';
import SimpleDashboard from './components/simple-dashboard';

import CBM from '../src';
import sampleData from '../src/sample-data.js';


const defaultData = [{
    name: 'Default',
    data: 'Hello World!'
}];

function checkSampleData(data) {
    if (!Array.isArray(data)) {
        throw 'SampleData is not an array.';
    }

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] !== 'object')
            throw `Data sample ${i} is not an object.`;
        if (typeof data[i].name !== 'string')
            throw `Data sample ${i} has an invalid name property.`;
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);

        checkSampleData(sampleData);

        const data = sampleData || defaultData;
        this.state = {
            data,
            selected: data[0],
            textFieldValue: '',
            isError: false
        };

        this.handleSelected = this.handleSelected.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSelected(selectedName, newData) {
        this.setState({
            selected: this.state.data.find(({ name }) => name === selectedName) ||
                {
                    name: 'Custom',
                    data: newData || this.state.selected.data
                }
        });
    }

    handleChange(value) {
        let newValue = null;
        let isError = false;
        try {
            newValue = JSON.parse(value);
        } catch {
            isError = true;
        }

        this.setState({
            isError,
            textFieldValue: value
        });

        this.handleSelected('Custom', newValue);
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <AppBar
                    drawerContent={
                        <DrawerContent
                            info={CBM.info}
                            data={this.state.data}
                            selected={this.state.selected}
                            onSelected={this.handleSelected}
                            textFieldValue={this.state.textFieldValue}
                            onChange={this.handleChange}
                            isError={this.state.isError}
                        />
                    }
                >
                    <SimpleDashboard
                        info={CBM.info}
                    >
                        <CBM.component data={this.state.selected.data} />
                    </SimpleDashboard>
                </AppBar>
            </ThemeProvider>
        );
    }
}