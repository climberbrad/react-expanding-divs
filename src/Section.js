import React, {Component} from 'react';

export default class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
        this.toggleContent = this.toggleContent.bind(this);
    }

    getHeight() {
        if(this.props.open){
            return "3em"
        } else {
            return "0"
        }
    }

    toggleContent() {
        this.props.toggleOne(this.props.id)
    }

    render() {
        var style = { height: this.getHeight() }
        return (
            <div className={"section section" + this.props.id}>
                <h2 className="sectionTitle" onClick={this.toggleContent} >{this.props.data.title}</h2>
                <p className="sectionContent" style={style} >{this.props.data.content}</p>
            </div>
        );
    }
}
