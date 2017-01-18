import React, {Component} from 'react';
import Section from './Section';

export default class Container extends Component {
    constructor(props) {
        super(props)
    }

    buildSections(sectionList) {
        var sections = sectionList.map(function(section, index){
            /* Remember to add a 'key'. React wants you to add an identifier when you instantiate a component multiple times */
            return <Section key={index} data={section} />
        })
        return sections;
    }

    render() {
        var sections = this.buildSections(this.props.data);
        return (
            <div className="container">
                {sections}
            </div>
        );
    }
}
