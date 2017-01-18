import React, {Component} from 'react';

export default class Section extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"section" + this.props.key}>
                <h2 className="sectionTitle">{this.props.data.title}</h2>
                <p className="sectionContent">{this.props.data.content}</p>
            </div>
        )
    }
}
