import { useState, useEffect } from 'react';

const images = [
  
  '/tht0.png',
  '/tht2.png',
  '/tht1.png',
  '/tht3.png',
];

const RotatingImages = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <img
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-auto h-72 rounded-md" 
      />

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`h-2 w-2 mx-2 rounded-full ${
              currentImage === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingImages;
