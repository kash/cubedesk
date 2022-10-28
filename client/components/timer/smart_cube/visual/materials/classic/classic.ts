import * as THREE from 'three';
import {resourceUri} from '../../../../../../util/storage';

const textureLink = (color: string) => resourceUri(`/images/smart_cube/${color}.png`);

export const material = [
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(textureLink('red'))}),
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(textureLink('orange'))}),

	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(textureLink('white'))}),
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(textureLink('yellow'))}),

	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(textureLink('green'))}),
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load(textureLink('blue'))}),
];
