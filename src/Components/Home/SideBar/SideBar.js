import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Contact from '../../Feedback/FeedBack'
import man from '../../../images/man.jpeg'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical, faSlidersH } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ isToggle, setIsToggle }) => {
    const [isShow, setIsShow] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShowForm = () => {
        setIsShow(true)
        setShow(true)

    }

    return (
        <div className='sidebar row p-3'>
            <div className="col-md-12 col-6 mt-4">
                <div className='row container mb-1 sidebar-first-div'>
                    <div className='col-md-4'>
                        <img src={man} className='img-fluid rounded-circle mt-4' style={{height:'100px',width:'150px'}} />
                    </div>
                    <div className='col-md-8 mt-5'>

                        <p>Here's your News</p>

                    </div>
                </div>
            </div>
            <div className="col-md-12 col-6 ">
                <div className='d-flex flex-column container mt-4 sidebar-first-div'>
                    <h3 className='mt-4 text-center'>View Toggle</h3>
                    <div className='d-flex align-items-center justify-content-center mb-4'>
                        <button className='btn btn-success' onClick={() => setIsToggle(true)}><FontAwesomeIcon icon={faSlidersH} /></button>
                        <button className='btn btn-primary' onClick={() => setIsToggle(false)}><FontAwesomeIcon icon={faGripVertical} /></button>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-6">
                <div className='d-flex flex-column container mt-4 mb-1 sidebar-first-div'>
                    <h5 className='mt-4 text-center'>Have a Feedback</h5>
                    <button className='btn btn-secondary mb-4' onClick={() => handleShowForm()}>We are listening</button>


                </div>
            </div>

            <div>

            </div>
            <div>

            </div>


            {
                isShow &&
                <Modal show={show} onHide={handleClose} animation={false} >
                    <Modal.Dialog style={{ width: '100%', padding: '30px', border: 'none' }}>
                        <Contact />
                    </Modal.Dialog>
                </Modal>



            }


        </div>
    );
};

export default SideBar;