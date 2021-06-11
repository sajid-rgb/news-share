import React, { useContext } from 'react';
import { IdContext } from '../../../App';
import './VerticalView.css'
import SingleNews from '../../SingleNews/SingleNews'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
const VerticalView = ({ news, handleRemoveNews }) => {
    const { title, summary, published, id } = news;
    const newSummary = summary && summary.split('', 60)

    const [findId, setFindId] = useContext(IdContext)
    const [isShow, setIsShow] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShowNews = (id) => {

        setFindId(id)
        setIsShow(true)
        setShow(true)

    }
    return (
        <div className='news-card mt-4 p-4'>
            <button className='btn btn-danger' onClick={() => handleRemoveNews(id)}>Close</button>

            <h5>{title}</h5>
            <p>{newSummary}......</p>
            <p>{published}</p>

            <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleShowNews(id)}>More...</button>
            {
                isShow &&
                <Modal show={show} onHide={handleClose} animation={false} >
                    <Modal.Dialog style={{ width: '100%', padding: '10px',border:'none' }}>
                        <SingleNews />
                    </Modal.Dialog>
                </Modal>



            }
        </div>
    );
};

export default VerticalView;