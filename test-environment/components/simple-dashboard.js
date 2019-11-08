import React from 'react';
import PropTypes from 'prop-types';

import ScalableContainer from './scalable-container';


const maxWidth = 1080; // px
const minWidth = 300; // px
const initialWidth = 600; // px

class SimpleDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null
        };
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.setState({
            width: this.container.offsetWidth
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        if (typeof this.props.onRegisterResize === 'function')
            this.props.onRegisterResize(this.handleResize);
        
        this.handleResize();
    }

    render() {
        const currentMaxWidth = Math.min(maxWidth, this.state.width);

        return (
            <div style={{ 'margin': '16px 32px' }} ref={elem => (this.container = elem)}>
                <ScalableContainer
                    minWidth={minWidth}
                    initialWidth={initialWidth}
                    maxWidth={currentMaxWidth}
                    info={this.props.info}
                    children={this.props.children}
                />
            </div>
        );
    }
}

SimpleDashboard.propTypes = {
    info: PropTypes.object.isRequired,
    onRegisterResize: PropTypes.func
};

export default SimpleDashboard;