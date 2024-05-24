import React from 'react';
import '../styles/styles.css'; 
import img1 from '../images/img-01.jpg'; 
import img2 from '../images/img-02.jpg';
import img3 from '../images/img-03.jpg';
import img4 from '../images/img-04.jpg';

function Gallery() {
    const images = [
        { url: img1, description: 'The Dark Knight (2008)' },
        { url: img2, description: '2 Fast 2 Furious (2003)' },
        { url: img3, description: 'First Blood (1982)' },
        { url: img4, description: 'Lucky Number Slevin (2006)' }
    ];

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image.url} alt={`Gallery item ${index}`} />
                    <p>{image.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
