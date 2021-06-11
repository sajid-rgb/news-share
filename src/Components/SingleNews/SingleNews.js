import React, { useContext, useEffect, useState } from 'react';
import { IdContext } from '../../App';

const SingleNews = () => {
    const [newses, setNewses] = useState([])
    const [findId, setFindId] = useContext(IdContext)
    useEffect(() => {
        fetch('https://api.first.org/data/v1/news')
            .then(response => response.json())
            .then(data => setNewses(data.data))

    }, [])

    const newNews = newses.find(news => news.id === findId)
    console.log(newNews)
    return (
        <div>
            <div className="d-flex justify-content-evenly bg-primary">
                <li style={{listStyle:'none'}}>About</li>
                <li style={{listStyle:'none'}}>MemberShips</li>
                <li style={{listStyle:'none'}}>Intiative</li>
                <li style={{listStyle:'none'}}>Standards and publications</li>
            
            </div>



            <div className="row pt-2">
                <div className="col-md-4">
                    <div className="h-100 w-100 bg-success">
                        <div>
                            <p>More..</p>

                        </div>

                    </div>

                </div>
                <div className="col-md-8">
                    <div>
                        <h4>{newNews?.title}</h4>
                        <p>{newNews?.summary}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNews;