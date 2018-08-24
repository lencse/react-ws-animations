import React from 'react';
import Card from '../Card';
import './styles.css';
import { CSSTransition, TransitionGroup} from 'react-transition-group'

export default ({ videos, onRemoveClick }) => (
    <div className="cardlist-container">
      <TransitionGroup>
          {videos.map(video => (
            <CSSTransition
              key={video.id}
              timeout={400}
              classNames="card"
            >
              <Card key={video.id} {...video} onRemoveClick={() => onRemoveClick(video.id)} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
)