import React, {Component} from 'react';
import Section from './Section';

export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openSectionIndex: 2
        }
        this.buildSection = this.buildSection.bind(this);
        this.toggleOne = this.toggleOne.bind(this);
    }

    getInitialState(sectionList) {
        return { openSectionIndex: -1 }
    }

    buildSections(sectionList) {
        var sections = sectionList.map(this.buildSection)
        return sections;
    }

    toggleOne(id) {
        if(this.state.openSectionIndex === id){
            this.setState({openSectionIndex: -1});
        } else {
            this.setState({openSectionIndex: id});
        }
    }

    buildSection(section, index) {
        var openStatus = (index === this.state.openSectionIndex);
        /* Remember to add a 'key'. React wants you to add an identifier when you instantiate a component multiple times */
        return <Section id={index} data={section} toggleOne={this.toggleOne} open={openStatus} />
    }

    render() {
        var sections = this.buildSections(this.props.data);
        return (
            <div className="container">{sections}</div>
        );
    }
}
