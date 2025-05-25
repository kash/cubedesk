const aes128 = (function () {
	const Sbox = [
		99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240,
		173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49,
		21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82,
		59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239,
		170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182,
		218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79,
		220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98,
		145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46,
		28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185,
		134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137,
		13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22,
	];
	var SboxI = [];
	var ShiftTabI = [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3];
	var xtime = [];

	function addRoundKey(state, rkey) {
		for (var i = 0; i < 16; i++) {
			state[i] ^= rkey[i];
		}
	}

	function shiftSubAdd(state, rkey) {
		var state0 = state.slice();
		for (var i = 0; i < 16; i++) {
			state[i] = SboxI[state0[ShiftTabI[i]]] ^ rkey[i];
		}
	}

	function mixColumnsInv(state) {
		for (var i = 0; i < 16; i += 4) {
			var s0 = state[i + 0];
			var s1 = state[i + 1];
			var s2 = state[i + 2];
			var s3 = state[i + 3];
			var h = s0 ^ s1 ^ s2 ^ s3;
			var xh = xtime[h];
			var h1 = xtime[xtime[xh ^ s0 ^ s2]] ^ h;
			var h2 = xtime[xtime[xh ^ s1 ^ s3]] ^ h;
			state[i + 0] ^= h1 ^ xtime[s0 ^ s1];
			state[i + 1] ^= h2 ^ xtime[s1 ^ s2];
			state[i + 2] ^= h1 ^ xtime[s2 ^ s3];
			state[i + 3] ^= h2 ^ xtime[s3 ^ s0];
		}
	}

	function init() {
		if (xtime.length !== 0) {
			return;
		}
		for (var i = 0; i < 256; i++) {
			SboxI[Sbox[i]] = i;
		}
		for (var i = 0; i < 128; i++) {
			xtime[i] = i << 1;
			xtime[128 + i] = (i << 1) ^ 0x1b;
		}
	}

	function AES128(key) {
		init();
		var exKey = key.slice();
		var Rcon = 1;
		for (var i = 16; i < 176; i += 4) {
			var tmp = exKey.slice(i - 4, i);
			if (i % 16 === 0) {
				tmp = [Sbox[tmp[1]] ^ Rcon, Sbox[tmp[2]], Sbox[tmp[3]], Sbox[tmp[0]]];
				Rcon = xtime[Rcon];
			}
			for (var j = 0; j < 4; j++) {
				exKey[i + j] = exKey[i + j - 16] ^ tmp[j];
			}
		}
		this.key = exKey;
	}

	AES128.prototype.decrypt = function (block) {
		addRoundKey(block, this.key.slice(160, 176));
		for (var i = 144; i >= 16; i -= 16) {
			shiftSubAdd(block, this.key.slice(i, i + 16));
			mixColumnsInv(block);
		}
		shiftSubAdd(block, this.key.slice(0, 16));
		return block;
	};

	return AES128;
})();

export default aes128;
