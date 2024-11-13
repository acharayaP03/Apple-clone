import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

import { yellowImg } from '../../utils';
import { models, sizes } from '../../constants';

import Model3DView from './Model3DView';
import { Button, SectionHeading } from '../../components/ui';
import ModelColorPicker from './ModelColorPicker';

const initialState = {
  title: 'iPhone 16 pro in Natural Titanium',
  color: ['#8f8a81', '#FFE7B9', '#6F6C64'],
  img: yellowImg,
};

export default function Model3D() {
  const [size, setSize] = useState(0);
  const [model, setModel] = useState(initialState);

  // camera control for model view
  const cameraControlSmall = useRef();
  const cameraControllLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // track the current model
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);
  useGSAP(() => {
    gsap.to(
      '#heading',
      {
        y: 0,
        duration: 1,
        delay: 1.5,
        opacity: 1,
      },
      [],
    );
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <SectionHeading text="Take a closer look." id="heading" />
        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
            <Model3DView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setLargeRotation={setSmallRotation}
              item={model}
              size={size}
            />
            <Model3DView
              index={2}
              groupRef={large}
              gsapType="view1"
              controlRef={cameraControllLarge}
              setLargeRotation={setLargeRotation}
              item={model}
              size={size}
            />
          </div>

          <Canvas
            className="h-full w-full"
            style={{ position: 'fixed', inset: 0, overflow: 'hidden' }}
            eventSource={document.getElementById('root')}
          >
            <View.Port />
          </Canvas>
        </div>
        <div className="mx-auto w-full">
          <p className="mb-5 text-center text-sm text-gray-400">
            {model.title}
          </p>
          <div className="flex-center">
            <ul className="color-container">
              {models.map((item, index) => (
                <ModelColorPicker
                  key={index}
                  item={item}
                  index={index}
                  setModel={setModel}
                />
              ))}
            </ul>

            <Button className="size-btn-container">
              {sizes.map(({ label, value }) => (
                <span
                  className="size-btn"
                  key={label}
                  style={{
                    backgroundColor: size === value ? 'white' : 'transparent',
                    color: size === value ? 'black' : 'white',
                  }}
                  onClick={() => setSize(value)}
                >
                  {label}
                </span>
              ))}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
