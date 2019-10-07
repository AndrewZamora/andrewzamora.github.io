import React from 'react';
import Card from '../src/components/card';

export default {
  title: 'Card',
};

export const card = () => (
  <Card
    title="TEST"
    info="This provides info."
    img="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
);
