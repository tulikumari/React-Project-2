import React from 'react';
import Demo from '../../../components/demo.component';
import CardMediaExample from './examples/card-media-example';
import CardMediaExampleRaw from './examples/card-media-example-raw';

const Card = () => (
  <div className="blogcard">
    <Demo index={2} js={CardMediaExample} raw={CardMediaExampleRaw} />
  </div>
);

export default Card;
