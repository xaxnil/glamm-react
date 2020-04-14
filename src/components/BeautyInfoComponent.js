import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Label, Col,
    Row, Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


function RenderCampsite({ campsite }) {
    if (campsite) {
        return (
            <div className="col-md-2 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} width="100" height="80" />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    return <div />;
}


function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>

                {comments.map(comment =>
                    <div key={comment.id}>
                        <h6>{comment.text}</h6>
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        <p></p>
                    </div>)

                }
                <CommentForm />
            </div>


        );//return
    }
    return <div />;
}



function BeautySiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            author: '',
            rating: '',
            text: '',
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }
    render() {
        return (
            <div className="container">

                <div className="row row-content">
                    <Button outline onClick={this.toggleModal} size="lg">Submit Comment</Button>
                    <div className="col-md-10">
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader>Submit Comment</ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                    <div className="form-group">
                                        <Label htmlFor="rating">Rating</Label>
                                        <Row className="form-group">

                                            <Col>
                                                <Control.select model=".rating" name="rating"
                                                    className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="form-group">
                                        <Label htmlFor="author">Your name</Label>
                                        <Row className="form-group">
                                            <Col>
                                                <Control.text model=".author" id="author" name="author"
                                                    placeholder="Your name"
                                                    className="form-control"
                                                    validators={{
                                                        required,
                                                        minLength: minLength(2),
                                                        maxLength: maxLength(15)
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".author"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be at least 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </div>


                                    <div className="form-group">
                                        <Label htmlFor="text">Comment</Label>
                                        <Row className="form-group">
                                            <Col>
                                                <Control.textarea model=".text" id="text" name="text"
                                                    rows="12"
                                                    className="form-control"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Button type="submit" color="primary">
                                                    Submit
                                            </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </LocalForm>
                            </ModalBody>
                        </Modal>


                    </div>
                </div>
            </div>

        );

    }
}

export default BeautySiteInfo;