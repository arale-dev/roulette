import { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";

const Board = ({ children }: { children: ReactNode }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};

export default Board;
