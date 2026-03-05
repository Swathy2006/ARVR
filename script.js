import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;

document.body.appendChild(renderer.domElement);
document.body.appendChild(VRButton.createButton(renderer));

const light = new THREE.HemisphereLight(0xffffff,0x444444);
scene.add(light);

const geometry = new THREE.PlaneGeometry(50,50);
const material = new THREE.MeshBasicMaterial({color:0x228B22});
const ground = new THREE.Mesh(geometry, material);

ground.rotation.x = -Math.PI/2;
scene.add(ground);

camera.position.set(0,1.6,3);

renderer.setAnimationLoop(() => {
renderer.render(scene, camera);
});