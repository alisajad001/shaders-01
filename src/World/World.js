import * as THREE from 'three';

import Experience from '../Experience/Experience';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    // Test Cube
    const testCube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshNormalMaterial()
    );
    this.scene.add(testCube);
  }
}
