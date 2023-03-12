export const fragmentShader = `
  uniform vec3 uColor;

  vec4 texture = texture2D(uTexture, coverUv);
    vec4 color = texture;

  void main() {
    vec4 texture = texture2D(uTexture, coverUv);
    vec4 color = texture;

    color = vec4;

    gl_FragColor = color;
  }
`;
