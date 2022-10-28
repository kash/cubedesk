import * as THREE from 'three';
import CubeMesh from './CubeMesh';
import {Axis} from './types';

export class RubiksCube {
	private camera: THREE.PerspectiveCamera;
	private scene: THREE.Scene;
	private renderer: THREE.Renderer;
	private locked: boolean = false;

	constructor(
		canvas: HTMLCanvasElement,
		private materials: THREE.MeshBasicMaterial[],
		private speed: number = 1000,
		width: string = '100%',
		height: string = '100%',
		initState: string
	) {
		this.camera = new THREE.PerspectiveCamera();
		this.camera.position.set(4, 4, 4);
		this.camera.lookAt(0, -0.33, 0);

		this.scene = new THREE.Scene();
		this.scene.add(...this.generateCubeCluster(initState));

		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			canvas,
			alpha: true,
		});
		this.renderer.domElement.style.width = width;
		this.renderer.domElement.style.height = height;

		this.resize();
		this.render();
	}

	public resize() {
		const canvas = this.renderer.domElement;
		const pixelRatio = window.devicePixelRatio;
		const width = (canvas.clientWidth * pixelRatio) | 0;
		const height = (canvas.clientHeight * pixelRatio) | 0;

		if (canvas.width !== width || canvas.height !== height) {
			this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(width, height, false);
		}
	}

	// Front
	public async F(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh && node.position.z === 1);
		await this.rotate(cubes, Axis.z, clockwise, duration);
	}

	// Back
	public async B(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh && node.position.z === -1);
		await this.rotate(cubes, Axis.z, clockwise, duration);
	}

	// Up
	public async U(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh && node.position.y === 1);
		await this.rotate(cubes, Axis.y, clockwise, duration);
	}

	// Down
	public async D(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh && node.position.y === -1);
		await this.rotate(cubes, Axis.y, clockwise, duration);
	}

	// Left
	public async L(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh && node.position.x === -1);
		await this.rotate(cubes, Axis.x, clockwise, duration);
	}

	// Right
	public async R(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh && node.position.x === 1);
		await this.rotate(cubes, Axis.x, clockwise, duration);
	}

	// Front two layers
	public async f(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter(
			(node) => node instanceof CubeMesh && (node.position.z === 1 || node.position.z === 0)
		);
		await this.rotate(cubes, Axis.z, clockwise, duration);
	}

	// Back two layers
	public async b(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter(
			(node) => node instanceof CubeMesh && (node.position.z === -1 || node.position.z === 0)
		);
		await this.rotate(cubes, Axis.z, clockwise, duration);
	}

	// Up two layers
	public async u(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter(
			(node) => node instanceof CubeMesh && (node.position.y === 1 || node.position.y === 0)
		);
		await this.rotate(cubes, Axis.y, clockwise, duration);
	}

	// Down two layers
	public async d(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter(
			(node) => node instanceof CubeMesh && (node.position.y === -1 || node.position.y === 0)
		);
		await this.rotate(cubes, Axis.y, clockwise, duration);
	}

	// Left two layers
	public async l(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter(
			(node) => node instanceof CubeMesh && (node.position.x === -1 || node.position.x === 0)
		);
		await this.rotate(cubes, Axis.x, clockwise, duration);
	}

	// Right two layers
	public async r(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter(
			(node) => node instanceof CubeMesh && (node.position.x === 1 || node.position.x === 0)
		);
		await this.rotate(cubes, Axis.x, clockwise, duration);
	}

	// Cube on x axis
	public async x(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh);
		await this.rotate(cubes, Axis.x, clockwise, duration);
	}

	// Cube on y axis
	public async y(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh);
		await this.rotate(cubes, Axis.y, clockwise, duration);
	}

	// Cube on z axis
	public async z(clockwise: boolean = true, duration: number = this.speed) {
		const cubes = this.scene.children.filter((node) => node instanceof CubeMesh);
		await this.rotate(cubes, Axis.z, clockwise, duration);
	}

	private async rotate(cubes: THREE.Object3D[], axis: Axis, clockwise: boolean = false, duration: number) {
		if (!this.locked) {
			const group = cubes.reduce((acc, cube) => acc.add(cube), new THREE.Object3D());

			this.scene.add(group);

			await this.rotateObject(group, axis, clockwise, duration);

			for (let i = group.children.length - 1; i >= 0; i--) {
				const child = group.children[i];
				this.scene.attach(child);
				child.position.set(
					Math.round(child.position.x),
					Math.round(child.position.y),
					Math.round(child.position.z)
				);
			}

			this.scene.remove(group);
			this.locked = false;
		}
	}

	private async rotateObject(
		object: THREE.Object3D,
		axis: Axis,
		clockwise: boolean,
		duration: number,
		start?: number
	) {
		return new Promise((resolve) => {
			const radians = (clockwise ? -1 : 1) * THREE.MathUtils.degToRad(90);

			switch (axis) {
				case Axis.x:
					object.rotation.set(radians, 0, 0);
					break;
				case Axis.y:
					object.rotation.set(0, radians, 0);
					break;
				case Axis.z:
					object.rotation.set(0, 0, radians);
					break;
				default:
					break;
			}

			resolve(null);
		});
	}

	private render() {
		window.requestAnimationFrame(this.render.bind(this));
		this.renderer.render(this.scene, this.camera);
	}

	private generateCubeCluster(initState: string) {
		const materialMapping: {[key: string]: number} = {
			R: 0,
			L: 1,
			U: 2,
			D: 3,
			F: 4,
			B: 5,
		};

		const positionMapping: {[key: string]: string} = {
			'1,1,1': 'B',
			'0,1,1': 'U',
			'0,-1,1': 'U',
			'0,1,-1': 'U',
		};

		const cubes: CubeMesh[] = [];
		for (let z = -1; z < 2; z++) {
			for (let y = -1; y < 2; y++) {
				for (let x = -1; x < 2; x++) {
					const cube = new CubeMesh({
						position: new THREE.Vector3(x, y, z),
						materials: this.materials,
					});

					cubes.push(cube);
				}
			}
		}

		return cubes;
	}
}
