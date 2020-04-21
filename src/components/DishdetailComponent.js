import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup,ListGroupItem, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Input, Label, Row, Col  } from 'reactstrap';
import { LocalForm ,Control, Errors } from 'react-redux-form';
import '../Dish.css';
import {Link} from 'react-router-dom';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

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

function RenderComments({comments, addComment, dishId}){

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
                <CommentForm dishId={dishId} addComment={addComment}/>
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
                    <RenderComments comments={props.comments} 
                    addComment={props.addComment}
                    dishId={props.dish.id}/>
            </div>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    
     handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render(){
        return (
        <div className="container">
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="col-12 col-md-9">
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody >
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                             <Row className="form-group">
                                 <Label htmlFor="rating" className="m-3"> Rating</Label>
                                 <Col md={12}>
                                <Control.select model=".rating" name="rating" className="form-control" value="1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                </Col>
                            </Row>
                             <Row className="form-group">
                                 <Label htmlFor="author" className="m-3">Your name</Label>
                                 <Col md={12}>
                                <Control.text model=".author" id="author" name="author" className="form-control" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}/>
                                <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                />
                                </Col>
                            </Row>
                             <Row className="form-group">
                                 <Label htmlFor="comment" className="m-3"> Comment</Label>
                                 <Col md={12}>
                               <Control.textarea model=".comment" id="comment" name="comment" className="form-control" rows="6" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Sumbit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
             </div>
        
        );     
    }
}
export default DishDetail;



