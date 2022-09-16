import React, { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";

import { ThreeByThree } from "@lib/cubes/ThreeByThree";

import Box from "./box";

interface IProps {
  cube: ThreeByThree;
}

const RubiksCube: FC<IProps> = ({ cube }) => {

  const [state] = useState<any>(cube.getHexRubik());
  const refs = useRef<THREE.Mesh[]>(new Array(26).fill(null));

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      for (let i = 0; i < 27; i++) {
        refs.current[i].name = Number(i).toString();
      }
    }
    setMounted(true);
  }, [mounted]);

  return (
    <group scale={1}>
      {cube.getCubePositions().map((position, i) => {
        return (
          <Box
            key={position.join("-")}
            state={state[i]}
            position={position}
            init={i}
            name={Number(i).toString()}
            ref={(element: THREE.Mesh) => {
              refs.current[i] = element as THREE.Mesh;
            }}
          />
        );
      })}
    </group>
  );
};
export default RubiksCube;
