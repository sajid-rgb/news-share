import React from 'react';

const Pagination = ({newsPerPage,totalNews,paginate}) => {
    let numbers=[]
    for(let i = 1; i < Math.ceil(totalNews/newsPerPage); i++) {
        numbers.push(i)
    }
    return (
        <div>
            <ul className='pagination'>
                {
                    numbers.map(number=><li key={number} className='page-item'>
                       <a  onClick={() =>paginate(number)} className='page-link'>{number}</a>


                    </li>)
                }
            </ul>
            
        </div>
    );
};

export default Pagination;