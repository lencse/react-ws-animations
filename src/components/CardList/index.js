import React from 'react';
import Card from '../Card';
import './styles.css';

export default ({ videos, onRemoveClick }) => (
  <div className="cardlist-container">
      {videos.map(video => (
        <Card key={video.id} {...video} onRemoveClick={() => onRemoveClick(video.id)} />
      ))}
  </div>
)