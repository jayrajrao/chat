import React from 'react'
import { Helmet } from 'react-helmet-async'
const Title = ({ title = "chaf", description = "ew4wr" }) => {
    return (
        <Helmet>
            <title>Zorro.in</title> 
             <meta name='description' content='{description}' />
        </Helmet>
    );
};

export default Title