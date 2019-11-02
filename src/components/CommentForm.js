import React, { useState } from 'react'
import { Button,  Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form'

const required  = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

const CommentForm = (props) => {   
 
        const {
          buttonLabel,
          className
        } = props;
      
        const [modal, setModal] = useState(false);
      
        const toggle = () => setModal(!modal);
      
        return (
          <div>
            <Button className="btn btn-outline-secondary" onClick={toggle}>{buttonLabel}
                <i class="fa fa-pencil mr-2"></i>
                Submit Comment
            </Button>
                <LocalForm>

                <Modal isOpen={modal} toggle={toggle} className={className}>          
                <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <div>

                            <Label>  Rating </Label>                      
                                <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                        </div>

                        <div>

                            <Label className="mt-3">  Your Name  </Label>                     
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                        />
                                <Errors 
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"  
                                    messages={{
                                        required  : 'Required',
                                        minLength : 'Must be greater then 2 characters',
                                        maxLength : 'Must be 15 Characters or less'
                                    }}
                                        />
                        </div>

                        <div>

                            <Label className="mt-4"> Comment </Label>
                                <Control.textarea 
                                    model=".message"
                                    id="message" 
                                    name="message"
                                    rows="6"
                                    className="form-control" />
                        </div>

                        <div className="mt-3">
                            <Button color="primary" onClick={toggle}>Submit</Button>{' '}
                        </div>
                    </ModalBody>        
                </Modal>

            </LocalForm>
          </div>
        );
      }    


export default CommentForm