// Minimal AES-128 block cipher, only what's needed for the smart cube encryption scheme

const SBOX = new Uint8Array(256);
const INV_SBOX = new Uint8Array(256);

const rotl8 = (x: number, shift: number) => ((x << shift) | (x >> (8 - shift))) & 0xff;
const xtime = (x: number) => ((x << 1) ^ (x & 0x80 ? 0x1b : 0)) & 0xff;

function mul(a: number, b: number) {
	let res = 0;
	while (b) {
		if (b & 1) res ^= a;
		a = xtime(a);
		b >>= 1;
	}
	return res;
}

// Generate the S-box by walking GF(2^8) with generator 3 and its inverse
(() => {
	let p = 1;
	let q = 1;
	do {
		p = p ^ xtime(p);
		q ^= q << 1;
		q ^= q << 2;
		q ^= q << 4;
		q &= 0xff;
		if (q & 0x80) q ^= 0x09;
		const s = q ^ rotl8(q, 1) ^ rotl8(q, 2) ^ rotl8(q, 3) ^ rotl8(q, 4) ^ 0x63;
		SBOX[p] = s;
		INV_SBOX[s] = p;
	} while (p !== 1);
	SBOX[0] = 0x63;
	INV_SBOX[0x63] = 0;
})();

const ROUNDS = 10;

export default class Aes128 {
	private roundKeys: Uint8Array;

	constructor(key: Uint8Array) {
		if (key.length !== 16) throw new Error('AES-128 key must be 16 bytes long');

		const w = new Uint8Array(16 * (ROUNDS + 1));
		w.set(key);
		let rcon = 1;
		for (let i = 16; i < w.length; i += 4) {
			let t = [w[i - 4], w[i - 3], w[i - 2], w[i - 1]];
			if (i % 16 === 0) {
				t = [SBOX[t[1]] ^ rcon, SBOX[t[2]], SBOX[t[3]], SBOX[t[0]]];
				rcon = xtime(rcon);
			}
			for (let j = 0; j < 4; j++) {
				w[i + j] = w[i - 16 + j] ^ t[j];
			}
		}
		this.roundKeys = w;
	}

	private addRoundKey(state: Uint8Array, round: number) {
		for (let i = 0; i < 16; i++) state[i] ^= this.roundKeys[round * 16 + i];
	}

	encryptBlock(block: Uint8Array): Uint8Array {
		const s = new Uint8Array(block);
		this.addRoundKey(s, 0);
		for (let round = 1; round <= ROUNDS; round++) {
			// SubBytes + ShiftRows (state is column-major: index = col * 4 + row)
			const t = new Uint8Array(16);
			for (let c = 0; c < 4; c++) {
				for (let r = 0; r < 4; r++) {
					t[c * 4 + r] = SBOX[s[((c + r) % 4) * 4 + r]];
				}
			}
			if (round < ROUNDS) {
				for (let c = 0; c < 16; c += 4) {
					const [a0, a1, a2, a3] = [t[c], t[c + 1], t[c + 2], t[c + 3]];
					t[c] = mul(a0, 2) ^ mul(a1, 3) ^ a2 ^ a3;
					t[c + 1] = a0 ^ mul(a1, 2) ^ mul(a2, 3) ^ a3;
					t[c + 2] = a0 ^ a1 ^ mul(a2, 2) ^ mul(a3, 3);
					t[c + 3] = mul(a0, 3) ^ a1 ^ a2 ^ mul(a3, 2);
				}
			}
			s.set(t);
			this.addRoundKey(s, round);
		}
		return s;
	}

	decryptBlock(block: Uint8Array): Uint8Array {
		const s = new Uint8Array(block);
		for (let round = ROUNDS; round >= 1; round--) {
			this.addRoundKey(s, round);
			if (round < ROUNDS) {
				for (let c = 0; c < 16; c += 4) {
					const [a0, a1, a2, a3] = [s[c], s[c + 1], s[c + 2], s[c + 3]];
					s[c] = mul(a0, 14) ^ mul(a1, 11) ^ mul(a2, 13) ^ mul(a3, 9);
					s[c + 1] = mul(a0, 9) ^ mul(a1, 14) ^ mul(a2, 11) ^ mul(a3, 13);
					s[c + 2] = mul(a0, 13) ^ mul(a1, 9) ^ mul(a2, 14) ^ mul(a3, 11);
					s[c + 3] = mul(a0, 11) ^ mul(a1, 13) ^ mul(a2, 9) ^ mul(a3, 14);
				}
			}
			// InvShiftRows + InvSubBytes
			const t = new Uint8Array(16);
			for (let c = 0; c < 4; c++) {
				for (let r = 0; r < 4; r++) {
					t[c * 4 + r] = INV_SBOX[s[((c - r + 4) % 4) * 4 + r]];
				}
			}
			s.set(t);
		}
		this.addRoundKey(s, 0);
		return s;
	}
}
