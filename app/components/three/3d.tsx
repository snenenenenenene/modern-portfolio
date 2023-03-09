import { useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const MotionHover = ({
  image,
  position,
  scale,
}: {
  image: string;
  position: any;
  scale: number;
}) => {
  const ref = useRef<any>();

  function ImageMaterial({ url }: { url: string }) {
    const texture = useLoader(THREE.TextureLoader, url);
    return <meshStandardMaterial attach="material" map={texture} />;
  }
  const PLANE_SIZE = 4.0;

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <mesh scale={scale} ref={ref} position={position}>
      <planeGeometry args={[PLANE_SIZE * 2, PLANE_SIZE, 1, 1]} />
      <ImageMaterial url={image} />
    </mesh>
  );
};

export default MotionHover;
