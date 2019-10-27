import React, { Component } from 'react';

import {
    Card, CardImg,  CardText, CardBody,
    CardTitle
} from 'reactstrap';




    function RenderDish({ dish }) {
        if (dish != null)
            return (
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }





    function RenderList({comments}) {
        const menu = comments.map((comment) => {
          
            return (
             <div>
                <ul className='list-unstyled' key={comment.id}>
                    <li >
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, 
                            {new Intl.DateTimeFormat('en-US',
                            { year: 'numeric', month: 'short', day: '2-digit' })
                            .format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                </ul>
            </div>
            );
        });
        return menu;
    }

    function RenderComments({comments}) {
        console.log(comments)
        if (comments == null)
            return (
                <div></div>);

        else
            return (
                <div>
                    <h4>Comments</h4>

                    <div>
                        <RenderList comments={comments.comments} />
                        </div>
                </div>
            );
    }


    const DishDetail = (props) => {
     
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={ props.dish } />
                 
                </div>

                <div className="col-12 col-md-5 m-1">
           
                    <RenderComments comments={props.dish} />
                </div>
                
            </div>
        );
    }



export default DishDetail;