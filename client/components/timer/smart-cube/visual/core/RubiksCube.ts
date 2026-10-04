import CubeMesh from '@/components/timer/smart-cube/visual/core/CubeMesh';
import {Axis} from '@/components/timer/smart-cube/visual/core/types';
import * as THREE from 'three';

export class RubiksCube {
	private camera: THREE.PerspectiveCamera;
	private scene: THREE.Scene;
	private renderer: THREE.WebGLRenderer;
	private locked: boolean = false;
	private frame: number | null = null;
	private lastFrameTime: number | null = null;
	private spinAxis: THREE.Vector3 | null = null;
	private spinSpeed: number = 0;
	// Inverse of the orientation the cube was held in when calibrated, which maps to the default view
	public orientationBasis: THREE.Quaternion | null = null;
	private targetOrientation: THREE.Quaternion | null = null;

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
		this.frame = window.requestAnimationFrame(this.render);
	}

	/**
	 * Continuously roll the whole cube toward a screen direction (x right, y up) while bobbing gently,
	 * for decorative use
	 */
	public spin(direction: {x: number; y: number}, radiansPerSecond: number) {
		// Center the cube so its corners stay in frame at every angle
		this.camera.lookAt(0, 0, 0);
		// Rolling toward a direction on screen means rotating around the screen axis perpendicular to it
		this.spinAxis = new THREE.Vector3(-direction.y, direction.x, 0)
			.normalize()
			.applyQuaternion(this.camera.quaternion);
		this.spinSpeed = radiansPerSecond;
	}

	/**
	 * Follow the physical cube's orientation, relative to how it was held when first called or last reset.
	 * Axes point to the R, U and F faces, the same as the scene's.
	 */
	public setOrientation({x, y, z, w}: {x: number; y: number; z: number; w: number}) {
		const orientation = new THREE.Quaternion(x, y, z, w).normalize();
		if (!this.orientationBasis) {
			this.orientationBasis = orientation.clone().conjugate();
		}
		if (!this.targetOrientation) {
			// Center the cube so its corners stay in frame at every angle
			this.camera.lookAt(0, 0, 0);
		}
		this.targetOrientation = orientation.premultiply(this.orientationBasis);
	}

	/** Treat the cube's next reported orientation as the default view */
	public resetOrientation() {
		this.orientationBasis = null;
		this.targetOrientation?.identity();
	}

	/** Stop rendering and free GPU resources, the shared materials are left alone */
	public dispose() {
		if (this.frame !== null) {
			window.cancelAnimationFrame(this.frame);
			this.frame = null;
		}
		this.scene.traverse((node) => {
			if (node instanceof CubeMesh) node.geometry.dispose();
		});
		this.renderer.dispose();
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

	private render = (time: number) => {
		this.frame = window.requestAnimationFrame(this.render);

		// Scale by elapsed time so motion doesn't depend on the display's refresh rate
		const elapsed = this.lastFrameTime === null ? 0 : (time - this.lastFrameTime) / 1000;
		if (this.spinAxis) {
			this.scene.rotateOnWorldAxis(this.spinAxis, this.spinSpeed * elapsed);
			this.scene.position.y = Math.sin(time / 800) * 0.15;
		} else if (this.targetOrientation) {
			// Ease toward the reported orientation to smooth out gyroscope jitter
			this.scene.quaternion.slerp(this.targetOrientation, 1 - Math.pow(0.75, elapsed * 60));
		}
		this.lastFrameTime = time;

		this.renderer.render(this.scene, this.camera);
	};

	private generateCubeCluster(initState: string) {
		// Box geometry material slots are +x, -x, +y, -y, +z, -z, which are the R, L, U, D, F, B faces
		const faceMaterial = (face: string) => this.materials['RLUDFB'.indexOf(face)];
		const state = /^[URFDLB]{54}$/.test(initState) ? initState : null;

		const cubes: CubeMesh[] = [];
		for (let z = -1; z < 2; z++) {
			for (let y = -1; y < 2; y++) {
				for (let x = -1; x < 2; x++) {
					const materials = [...this.materials];
					if (state) {
						// Facelet indices follow the Kociemba layout, each face read row by row as seen from outside
						if (x === 1) materials[0] = faceMaterial(state[9 + (1 - y) * 3 + (1 - z)]);
						if (x === -1) materials[1] = faceMaterial(state[36 + (1 - y) * 3 + (z + 1)]);
						if (y === 1) materials[2] = faceMaterial(state[(z + 1) * 3 + (x + 1)]);
						if (y === -1) materials[3] = faceMaterial(state[27 + (1 - z) * 3 + (x + 1)]);
						if (z === 1) materials[4] = faceMaterial(state[18 + (1 - y) * 3 + (x + 1)]);
						if (z === -1) materials[5] = faceMaterial(state[45 + (1 - y) * 3 + (1 - x)]);
					}

					cubes.push(
						new CubeMesh({
							position: new THREE.Vector3(x, y, z),
							materials
						})
					);
				}
			}
		}

		return cubes;
	}
}
