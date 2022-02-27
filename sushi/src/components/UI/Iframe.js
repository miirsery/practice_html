import React from 'react';

const Iframe = ({source}) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        // basic bootstrap classes. you can change with yours.
        <div className="map">
            <div className="responsive">
                <iframe title='map' src={src}/>
            </div>
        </div>
    );
};

export default Iframe;