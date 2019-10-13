import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', () => {
            this.setSpans();
        });

    }

    setSpans() {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10) + 1;

        console.log(spans);

        this.setState({spans})

    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div className="" style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} className={"ui image"} src={urls.regular}
                     alt={description}/>
            </div>
        )
    }
}

export default ImageCard;