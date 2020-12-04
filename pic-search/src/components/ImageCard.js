import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {spanHeight: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setGridSpans);
    }

    setGridSpans = () => {
        const elementHeight = this.imageRef.current.clientHeight;
        const spanHeight = Math.ceil(elementHeight/10);
        this.setState({spanHeight});

    }

    render(){
        const {desc, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spanHeight}`}}>
                <img alt={desc}
                     src={urls.regular}
                     ref={this.imageRef}
                     />
            </div>
        );
    }
}

export default ImageCard;