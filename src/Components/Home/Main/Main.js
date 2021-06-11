import React, { useEffect } from 'react';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar'
import VerticalView from '../VerticalView/VerticalView'
import HorizontalView from '../HorizontalView/HorizontalView'
import Pagination from './Pagination';
const Main = () => {
    const [newses, setNewses] = useState([])
    const [isToggle, setIsToggle] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage, setNewsPerPage] = useState(6)
    const handleRemoveNews = (id) => {

        const newNewses = newses.filter(news => news.id !== id)
        setNewses(newNewses)
    }
    useEffect(() => {
        fetch('https://api.first.org/data/v1/news')
            .then(response => response.json())
            .then(data => setNewses(data.data))

    }, [])
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    currentPage = newses.slice(indexOfFirstNews, indexOfLastNews);

    const paginate = (page) => {
        setCurrentPage(page)
    }
    const [currentIndex,setCurrentIndex] =useState(1)
    return (
        <div className='row '>
            <div className='col-md-3'>
                <SideBar isToggle={isToggle} setIsToggle={setIsToggle} />
            </div>
            <div className="col-md-9">
                <div className='row container'>
                    {
                        currentPage.map(news => <div className={isToggle ? 'col-md-4' : 'col-12'}>

                            {
                                isToggle ? <VerticalView news={news} handleRemoveNews={handleRemoveNews} /> : <HorizontalView news={news} handleRemoveNews={handleRemoveNews} />
                            }

                        </div>)
                    }
                </div>
                <div className="mt-5 ml-3">
                    <Pagination newsPerPage={newsPerPage} totalNews={newses.length} paginate={paginate} />
                </div>
            </div>

        </div>
    );
};

export default Main;