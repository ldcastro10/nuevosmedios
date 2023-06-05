import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import useImage from 'use-image';
import { useNavigate } from 'react-router-dom';

const Principal = () => {
  const [image] = useImage('/dasd.jpg');
  const [maskIndex, setMaskIndex] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const masks = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg'
  ];

  const [mask] = useImage(masks[maskIndex]); // Ruta de la imagen de máscara

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleMouseMove = (e) => {
    try {
      const stage = e.target.getStage();
      const pos = stage.getPointerPosition();
      const context = e.target.getContext();
      context.globalCompositeOperation = 'source-over';
      context.drawImage(mask, pos.x - 20, pos.y - 20, 40, 40); // Tamaño y posición de la máscara
    } catch (error) {
      // Manejar el error aquí
      console.error('Error al dibujar la imagen de máscara:', error);
    }
  };
  

  const changeMask = () => {
    setMaskIndex((prevIndex) => (prevIndex + 1) % masks.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      changeMask();
    }, 1000);

    const redirectTimer = setTimeout(() => {
      setRedirect(true);
    }, 20000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate('/secundaria');
    }
  }, [redirect, navigate]);

  return (
    <Stage width={width} height={height}>
      <Layer>
        <Image
          image={image}
          width={width}
          height={height}
          onMouseMove={handleMouseMove}
        />
      </Layer>
    </Stage>
  );
};

export default Principal;
