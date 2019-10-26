import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);


    }


    renderComments(dish) {

        if (dish == null)
            return (
                <div></div>);

        else
            return (
                <div>
                    <h4>Comments</h4>

                    <div>{this.renderList(dish.comments)}</div>
                </div>
            );
    }


    renderList(comments) {
        const menu = comments.map((comment) => {
            return (
                <ul className='list-unstyled'>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {comment.date}</p>
                    </li>
                </ul>
            );
        });
        return menu;
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>

                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
                
            </div>
        );
    }

}

export default DishDetail;