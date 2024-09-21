precision mediump float;

uniform float uTime;
varying vec2 vUv;

void main() {
    vec2 uv = vUv * 2.0 - 1.0; // Normalize to center
    float len = length(uv); // Distance of the center
    float angle = atan(uv.y, uv.x); 
    float colorValue = 0.5 + 0.5 * sin(len * 10.0 - uTime * 2.0); 
    
    vec3 color = vec3(0.5 + 0.5 * cos(angle * 10.0 + uTime), colorValue, 0.5 + 0.5 * sin(angle * 4.0 + uTime));
    gl_FragColor = vec4(color, 1.0);
}
