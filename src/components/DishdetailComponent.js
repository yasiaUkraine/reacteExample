import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup,ListGroupItem, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import '../Dish.css';
import {Link} from 'react-router-dom';

function RenderDish({dish}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
        </div>
    );
}

function RenderComments({comments}){
    if(comments!=null){
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments></h4>
                <ul className="list-unstyled">
                    {comments.map((com)=>{
                        return (
                            <li key={com.id}>
                            <p>{com.comment}</p>
                            <p>--{com.author}, {com.date}</p>
                            </li>
                        );
        })}
                </ul>
            </div>
        );
}
    else{
        return (
            <div></div>
        );
    }
}

const DishDetail=(props)=>{
    if(props.dish!=null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}
                        </BreadcrumbItem>
                </Breadcrumb>
            <div className="col-12">
                    <h3>Menu</h3><hr/>
            </div>
            </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
            </div>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

export default DishDetail;



