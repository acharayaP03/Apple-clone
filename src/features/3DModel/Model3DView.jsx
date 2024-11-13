import { Suspense } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import {
  View,
  PerspectiveCamera,
  OrbitControls,
  Text,
} from '@react-three/drei';

import Lights from './Lights';
import Iphone3DModel from './Iphone3DModel';

export default function Model3DView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotation,
  item,
  size,
}) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`h-full w-full cursor-pointer ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      {/* Camera for 3d prespective */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      {/* Lights */}
      <Lights />
      {/* Camera control: allows users to move mouse on phone model */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotation(controlRef.current.azimuthalAngle())}
      />
      {/* Model */}
      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Text>Loading...</Text>}>
          <Iphone3DModel
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
}

Model3DView.propTypes = {
  index: PropTypes.number.isRequired,
  groupRef: PropTypes.object.isRequired,
  gsapType: PropTypes.string.isRequired,
  controlRef: PropTypes.object.isRequired,
  setRotation: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};
