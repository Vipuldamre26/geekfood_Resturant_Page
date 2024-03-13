import { useState } from 'react';
import './content.css';
import data from './data';

const Content = () => {

    const [allData, setAllData] = useState(data);


    const searchResturant = (value) => {

        let copyData = [...allData];

        const filteredData = copyData.filter((item) => {
            if (item.name.toLowerCase().includes(value.trim())) {
                return true;
            }

            return false;
        })

        setAllData(filteredData);


        if (value === '') {
            setAllData(data);
        }

        console.log(filteredData);
    }



    // ***********************************************************


    const searchResByRating = (value) => {

        let copyData = [...allData];

        const filteredData = copyData.filter((item) => {
            if (item.rating === parseFloat(value)) {
                return true;
            }

            return false;
        })

        setAllData(filteredData);


        if (value === '') {
            setAllData(data);
        }

        console.log(filteredData);
    }



    // *************************************************************



    return (
        <div className='content'>
            <div className='content-hero'>
                <input className='heroInput' onChange={(e) => searchResturant(e.target.value)} placeholder='Search Resturants...' type='text'></input>
                <div className='input-number'>
                    <label>Search by Rating:  </label>
                    <input type='number' onChange={(e) => searchResByRating(e.target.value)}></input>
                </div>
            </div>

            <div className='content-items'>

                {
                    allData.map((item) => {
                        return (
                            <div className='content-item' key={item.id}>
                                <div className='content1'>
                                    <div className='content1-1'>
                                        <span className='span1'>{item.name}</span>
                                        <span>⭐{item.rating} star Rating</span>
                                    </div>
                                    <p>{item.address}</p>
                                    <p>{item.outcode}{item.postcode}</p>
                                </div>

                                <div className='content2'>
                                    <p>🍴{item.type_of_food}</p>
                                    <a style={{textDecoration: 'none'}} href={item.URL}>Visit Menu</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}


export default Content; 