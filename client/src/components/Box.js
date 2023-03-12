import {useBox} from '@react-three/cannon';

const Box = ({ ...props }) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        mass: 1,
        ...props,
    }));

    return (
        <mesh position={props.position} ref={ref}>
            <boxGeometry args={props.args} />
            <meshStandardMaterial color={props.color} />
        </mesh>
    );
};

export default Box;
