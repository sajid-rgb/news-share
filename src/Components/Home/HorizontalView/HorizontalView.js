import { Modal } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { IdContext } from '../../../App';
import SingleNews from '../../SingleNews/SingleNews'
const VerticalView = ({ news, handleRemoveNews }) => {
    const { title, summary, published, id } = news;
    const newSummary = summary && summary.split('', 60)
    const [isShow, setIsShow] = useState(false)
    const [show, setShow] = useState(false);
    const [findId, setFindId] = useContext(IdContext)
    const handleClose = () => setShow(false);
    const handleShowNews = (id) => {

        setFindId(id)
        setIsShow(true)
        setShow(true)

    }
    return (
        <div className='d-flex justify-content-between mt-5'>
            <div className='w-100 p-4 rounded' style={{ border: '1px solid white', boxShadow: '1px 1px 5px black' }}>
                <h4>{title}</h4>
                <p>{newSummary}.......</p>
                <p>{published}</p>
                <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleShowNews(id)}>More...</button>
            </div>
            <div className='ms-3 mt-5'>
                <button className='btn btn-danger ' onClick={() => handleRemoveNews(id)}>Close</button>
            </div>

            {
                isShow &&
                <Modal show={show} onHide={handleClose} animation={false} >
                    <Modal.Dialog style={{ width: '100%', padding: '10px', border: 'none' }}>
                        <SingleNews />
                    </Modal.Dialog>
                </Modal>



            }

        </div>
    );
};

export default VerticalView;