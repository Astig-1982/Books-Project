import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const HomeSection = ({sectionLink}) => {
    return(
        <div>
            <h2>{sectionLink}</h2>
        </div>
    )
    
}

export default HomeSection