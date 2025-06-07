import React from 'react'
import * as animationData from './loading.json'
import Lottie from 'lottie-react';

const LoadingSpinner = () => {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoPlay
      style={{ width: 300, height: 300 }}
    />
  )
}

export default LoadingSpinner;
