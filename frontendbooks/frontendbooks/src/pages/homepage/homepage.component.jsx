import React from 'react';
import { Link } from 'react-router-dom';
import HomeSection from '../../components/homesection.component';

const HomePage = () => {

    return(
        <div>
            <Link to='/all-books'>
                <HomeSection sectionLink={'log in'} />
            </Link>
            <Link to='/all-books'>
                <HomeSection sectionLink={'books'} />
            </Link>
            <Link to='/all-books'>
                <HomeSection sectionLink={'authors'} />
            </Link>
        </div>
    )
    
}

export default HomePage