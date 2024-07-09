import React from 'react';
import './Gallery.css'

interface Image {
  src: string;
  height: number;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => 
            <div key={index} className="gallery-item">
                <img src={image.src} height={image.height} />
            </div>)
          }
        </div>
    );
  }

export default Gallery;