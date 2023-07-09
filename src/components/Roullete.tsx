import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { ThreeElements } from "@react-three/fiber";

const Roullete = (props: ThreeElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useEffect(() => {
    ref.current.rotation.x = Math.PI / 2;
  }, []);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <cylinderGeometry args={[2, 2, 0.1, undefined, undefined, undefined]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Roullete;
