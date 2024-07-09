import React from 'react';
import '../styles.css';
import './GalleryView.css';
import Gallery from '../components/Gallery'

export default function GalleryView () {
  const image = [{
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    height: 174
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    height: 150
  }]
  return (
    <div>
      <h1>wahye</h1>
      <Gallery images={image}/>
    </div>
  );
}