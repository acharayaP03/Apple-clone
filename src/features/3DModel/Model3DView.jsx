import { View } from '@react-three/drei';
import PropTypes from 'prop-types';

export default function Model3DView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setLargeRotation,
  item,
  size,
}) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`h-full w-full border-2 border-red-500 ${index === 2 ? 'right-[-100%]' : ''}`}
    ></View>
  );
}

Model3DView.propTypes = {
  index: PropTypes.number.isRequired,
  groupRef: PropTypes.object.isRequired,
  gsapType: PropTypes.string.isRequired,
  controlRef: PropTypes.object.isRequired,
  setLargeRotation: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
};
