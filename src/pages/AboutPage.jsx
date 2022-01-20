import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
function AboutPage() {
  return (<Card>
      <h1>About this project</h1>
      <p>React app for leave feedbacks for services received</p>
      <Link to='/'>Back To Home</Link>
  </Card>)
}

export default AboutPage;
