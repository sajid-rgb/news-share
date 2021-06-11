import { Modal } from 'bootstrap';
import React from 'react';
import isEmail from 'validator/lib/isEmail';
import validator from 'validator';
const FeedBack = () => {
    return (
        <div className='row'>

            
            <div className="col-12">
                <h3>Thank you so much</h3>
                <p><small>Please provide the below details</small></p>
                <p>First Name</p>
                <input type='text' className='form-control' placeholder='John' />
                <p>Last Name</p>
                <input type='text' className='form-control' placeholder='Doe' />
                <p>Adress</p>
                <textarea type='text' cols='10' rows='5' className='form-control' placeholder='Write Something' />
                <p>Country</p>
                <input type='text' className='form-control' placeholder='Country name' />
                <p>Email Id</p>
                <input type='email' className='form-control' placeholder='Valid Email' />
                <p>Phone No</p>
                <div className="row">
                    <div className="col-md-4">
                        <input type='text' className='form-control' placeholder='+91' />
                    </div>
                    <div className="col-md-8">
                        <input type='text' className='form-control' placeholder='123456789' />
                    </div>
                    <button className='btn btn-success mt-3'>Submit</button>
                </div>

            </div>
        </div>
    );
};

export default FeedBack;