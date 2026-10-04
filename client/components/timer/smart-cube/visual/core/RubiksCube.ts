import CubeMesh from '@/components/timer/smart-cube/visual/core/CubeMesh';
import {Axis} from '@/components/timer/smart-cube/visual/core/types';
import * as THREE from 'three';

type Turn = {
	group: THREE.Object3D;
	axis: Axis;
	angle: number;
	start: number;
};

export class RubiksCube {
	private camera: THREE.PerspectiveCamera;
	private scene: THREE.Scene;
	private renderer: THREE.WebGLRenderer;
	private frame: number | null = null;
	private lastFrameTime: number | null = null;
	private spinAxis: THREE.Vector3 | null = null;
	private spinSpeed: number = 0;
	// Inverse of the orientation the cube was held in when calibrated, which maps to the default view
	public orientationBasis: THREE.Quaternion | null = null;
	private targetOrientation: THREE.Quaternion | null = null;
	private turning: Turn | null = null;

	constructor(
		canvas: HTMLCanvasElement,
		private materials: THREE.MeshBasicMaterial[],
		// How long a turn animates for in ms, a new turn cuts the previous one short so the view never lags further
		private turnDuration: number = 80,
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
	public F(clockwise: boolean = true) {
		this.rotate((p) => p.z === 1, Axis.z, clockwise);
	}

	// Back
	public B(clockwise: boolean = true) {
		this.rotate((p) => p.z === -1, Axis.z, clockwise);
	}

	// Up
	public U(clockwise: boolean = true) {
		this.rotate((p) => p.y === 1, Axis.y, clockwise);
	}

	// Down
	public D(clockwise: boolean = true) {
		this.rotate((p) => p.y === -1, Axis.y, clockwise);
	}

	// Left
	public L(clockwise: boolean = true) {
		this.rotate((p) => p.x === -1, Axis.x, clockwise);
	}

	// Right
	public R(clockwise: boolean = true) {
		this.rotate((p) => p.x === 1, Axis.x, clockwise);
	}

	// Front two layers
	public f(clockwise: boolean = true) {
		this.rotate((p) => p.z !== -1, Axis.z, clockwise);
	}

	// Back two layers
	public b(clockwise: boolean = true) {
		this.rotate((p) => p.z !== 1, Axis.z, clockwise);
	}

	// Up two layers
	public u(clockwise: boolean = true) {
		this.rotate((p) => p.y !== -1, Axis.y, clockwise);
	}

	// Down two layers
	public d(clockwise: boolean = true) {
		this.rotate((p) => p.y !== 1, Axis.y, clockwise);
	}

	// Left two layers
	public l(clockwise: boolean = true) {
		this.rotate((p) => p.x !== 1, Axis.x, clockwise);
	}

	// Right two layers
	public r(clockwise: boolean = true) {
		this.rotate((p) => p.x !== -1, Axis.x, clockwise);
	}

	// Cube on x axis
	public x(clockwise: boolean = true) {
		this.rotate(() => true, Axis.x, clockwise);
	}

	// Cube on y axis
	public y(clockwise: boolean = true) {
		this.rotate(() => true, Axis.y, clockwise);
	}

	// Cube on z axis
	public z(clockwise: boolean = true) {
		this.rotate(() => true, Axis.z, clockwise);
	}

	private rotate(inLayer: (position: THREE.Vector3) => boolean, axis: Axis, clockwise: boolean) {
		// Settle the turn in progress first, so pieces are picked by where they end up and turns never queue
		this.finishTurn();

		const group = new THREE.Object3D();
		group.add(
			...this.scene.children.filter((node) => node instanceof CubeMesh && inLayer(node.position))
		);
		this.scene.add(group);

		this.turning = {
			group,
			axis,
			angle: (clockwise ? -1 : 1) * (Math.PI / 2),
			start: performance.now(),
		};
		if (this.turnDuration <= 0) this.finishTurn();
	}

	private finishTurn() {
		if (!this.turning) return;

		const {group, axis, angle} = this.turning;
		this.turning = null;
		group.rotation[axis] = angle;

		for (const child of [...group.children]) {
			this.scene.attach(child);
			child.position.round();
		}
		this.scene.remove(group);
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

		if (this.turning) {
			const progress = Math.max(0, (time - this.turning.start) / this.turnDuration);
			if (progress >= 1) {
				this.finishTurn();
			} else {
				// Ease out so most of the turn happens right away and the view feels as quick as the cube
				const {group, axis, angle} = this.turning;
				group.rotation[axis] = angle * (1 - Math.pow(1 - progress, 3));
			}
		}

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
