/* eslint-disable no-unused-vars */
import { useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const ImagePlane = ({ image }: { image: string }) => {
  const ref = useRef<any>();
  const tex = useLoader(THREE.TextureLoader, image);
  const img = useLoader(THREE.ImageLoader, image);
  const raycaster = new THREE.Raycaster();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const PLANE_SIZE = 8.0;
  const speed = {
    value: 0.006,
  };
  const tilt = {
    x: 0,
    y: 0,
  };
  // let mouse = useRef(null);

  // useEffect(() => {
  //   const update = (e: any) => {
  //     if (mouse.current) {
  //       mouse.current = new THREE.Vector2(
  //         (e.clientX / window.innerWidth) * 2 - 1,
  //         -(e.clientY / window.innerHeight) * 2 + 1
  //       );
  //     }
  //   };
  //   window.addEventListener("pointermove", update);
  //   return () => {
  //     window.removeEventListener("pointermove", update);
  //   };
  // }, []);

  useFrame(({ scene, camera }) => {
    if (ref.current) {
      ref.current.material.uniforms.uTime.value += speed.value;
      gsap.to(ref.current.rotation, {
        x: tilt.y,
        y: tilt.x,
        duration: 0.4,
      });

      // get mouse pos
      if (mousePos.x !== 0 && mousePos.y !== 0) {
        raycaster.setFromCamera(mousePos, camera);
        const intersects = raycaster.intersectObjects([ref.current]);
        if (intersects.length && intersects[0].uv) {
          const point = new THREE.Vector2(
            intersects[0].uv.x,
            intersects[0].uv.y
          );
          ref.current.material.uniforms.uMousePos.value = point;
          gsap.to(ref.current.material.uniforms.uMouseRadius, {
            value: 0.2,
            duration: 0.4,
            overwrite: true,
          });
        }
      }
    }
  });

  const handlePointerEnter = () => {
    console.log(ref.current);
    gsap.to(ref.current.material.uniforms.uRadius, {
      value: 1.5,
      duration: 1.8,
      overwrite: true,
    });
    gsap.to(speed, {
      value: 0.02,
      duration: 0.5,
      overwrite: true,
    });
    gsap.to(ref.current.material.uniforms.uSpikes, {
      value: 2.5,
      duration: 0.8,
      overwrite: true,
    });
  };

  const handlePointerLeave = () => {
    gsap.to(ref.current.material.uniforms.uRadius, {
      value: 0.5,
      duration: 0.6,
      overwrite: true,
    });
    gsap.to(speed, {
      value: 0.006,
      duration: 1.8,
      overwrite: true,
    });
    gsap.to(ref.current.material.uniforms.uSpikes, {
      value: 1.5,
      duration: 2,
      overwrite: true,
    });
    gsap.to(tilt, {
      x: 0,
      y: 0,
      duration: 0.4,
      overwrite: true,
    });
    gsap.to(ref.current.material.uniforms.uMouseRadius, {
      value: 0.0,
      duration: 0.2,
      overwrite: true,
    });
  };

  const handlePointerMove = (e: any) => {
    tilt.x = -1.0 * (((e.clientX / window.innerWidth) * 2 - 1) * 0.5);
    tilt.y = -1.0 * (((e.clientY / window.innerHeight) * 2 - 1) * 0.5);
  };

  return (
    <mesh
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <planeBufferGeometry args={[PLANE_SIZE, PLANE_SIZE, 1, 1]} />
      {/* <circleGeometry args={[2.5, 128, 128]} /> */}
      <shaderMaterial
        uniforms={{
          uColor: { value: new THREE.Color("lightskyblue") },
          uPlaneSize: { value: new THREE.Vector2(PLANE_SIZE, PLANE_SIZE) },
          uImageSize: { value: new THREE.Vector2(img.width, img.height) },
          uMousePos: { value: new THREE.Vector2(0.0, 0.0) },
          uMouseRadius: { value: 0.0 },
          uTime: { value: 0.0 },
          uRadius: { value: 0.5 },
          uTexture: { value: tex },
          uSpikes: { value: 1.5 },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export const circle = `
  float circle(in vec2 st, in float r, vec2 pos){
    float dist = distance(st, pos);
    return 1.0 - smoothstep(r-r*0.001, r+r*0.001, dist);
  }
  float circle(in vec2 st, in float r){
    float dist = distance(st, vec2(0.5));
    return 1.0 - smoothstep(r-r*0.001, r+r*0.001, dist);
  }
`;

// background-size: cover for an image texture in a GLSL shader
// https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
export const cover = `
  vec2 getCoverUv (vec2 uv, vec2 resolution, vec2 texResolution) {
    vec2 s = resolution; // Screen
    vec2 i = texResolution; // Image
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 coverUv = uv * s / new + offset;
    return coverUv;
  }
`;

// https://gist.github.com/companje/29408948f1e8be54dd5733a74ca49bb9
export const map = `
  float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
  }
`;

export const noise = `
  //
  // Description : Array and textureless GLSL 2D/3D/4D simplex
  //               noise functions.
  //      Author : Ian McEwan, Ashima Arts.
  //  Maintainer : stegu
  //     Lastmod : 20201014 (stegu)
  //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
  //               Distributed under the MIT License. See LICENSE file.
  //               https://github.com/ashima/webgl-noise
  //               https://github.com/stegu/webgl-noise
  //

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
      return mod289(((x*34.0)+10.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v)
    {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

  // Mix final noise value
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
    }
`;

export const vertexShader = `
  varying vec2 vUv;
  void main() {
    // pass uv coords into fragment shader
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  uniform vec3 uColor;
  uniform vec2 uPlaneSize;
  uniform vec2 uImageSize;
  uniform vec2 uMousePos;
  uniform float uMouseRadius;
  uniform float uTime;
  uniform sampler2D uTexture;
  uniform float uSpikes;
  uniform float uRadius;

  varying vec2 vUv;

  ${noise}
  ${circle}
  ${map}
  ${cover}

  void main() {
    float mouseRadius = uMouseRadius;
    vec2 uv = vUv;
    vec2 coverUv = getCoverUv(uv, uPlaneSize, uImageSize);

    // apply image texture
    vec4 texture = texture2D(uTexture, coverUv);
    vec4 color = texture;

    // generate cursor blob noise (slow down uTime)
    float mouseBlobNoise = snoise(vec3(uv.x * uSpikes, uv.y * uSpikes, uTime * 0.3));

    // increase mouse radius based on distance from center vec2(0.5)
    mouseRadius = mouseRadius * (1.0 + smoothstep(0.15, 0.45, distance(uMousePos, vec2(0.5))));

    // apply noise to mouseRadius
    float cursorRadius = map(mouseBlobNoise,
                              0.0,
                              1.0,
                              mouseRadius-(mouseRadius * 0.2),
                              mouseRadius);

    // draw cursor circle blob at mouse pos
    vec3 cursorColor = mix(color.rgb, uColor, circle(uv, cursorRadius, uMousePos));
    color = vec4(cursorColor, 1.0);

    // use another circle blob as mask on the color's alpha channel (black === alpha of 0)
    float imageBlobNoise = snoise(vec3(uv.x * uSpikes, uv.y * uSpikes, uTime * 1.0));
    float radius = map(imageBlobNoise, 0.0, 1.0, uRadius*0.9, uRadius);
    float mask = circle(uv, radius);
    color.a = mask;

    gl_FragColor = color;
  }
`;

export default ImagePlane;
