import * as THREE from 'three';
import Experience from '../Experience/Experience';
import vertexShader from '../Shaders/vertex.glsl';
import fragmentShader from '../Shaders/fragment.glsl';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    // Cube
    this.testCube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.RawShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        side: THREE.DoubleSide,

        uniforms: {
          uTime: { value: 0 },
        },
      })
    );
    this.scene.add(this.testCube);
  }

  update() {
    this.testCube.material.uniforms.uTime.value =
      this.experience.time.elapsed * 0.001;
  }
}
