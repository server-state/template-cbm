import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import DrawerContent from './components/drawer-content';
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
                {/* Temporary Drawer */}
                {/* <AppBarTemporary
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
                />
                <SimpleDashboard
                    info={CBM.info}
                >
                    <CBM.component data={this.state.selected.data} />
                </SimpleDashboard> */}

                {/* Persistent Drawer */}
                <AppBarResponsive
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
                </AppBarResponsive>
            </ThemeProvider>
        );
    }
}