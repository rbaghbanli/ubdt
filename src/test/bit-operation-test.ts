import Bit_Operation from '../export/bit-operation';

class Bit_Operation_Test {

	static test_rotate_nat32(): number {
		let passed = 0, failed = 0;
		console.log( `test binary.test_rotate_nat32 started` );
		[
			[ 0, 0 ],
			[ 1, 0 ],
			[ 45454, 18 ],
			[ 11, 0x500 ],
			[ 0xffffffff, 3 ],
			[ 0xf0000000, 5 ],
			[ 0xff00ff00, 10 ],
			[ 0xff00fa00, 31 ],
		].forEach( prm => {
			const num: number = prm[ 0 ];
			const shift: number = prm[ 1 ];
			const v = Bit_Operation.rotate_nat32_left( Bit_Operation.rotate_nat32_right( num, shift ), shift );
			if ( v === num ) {
				++passed;
			}
			else {
				console.error( `test binary.test_rotate_nat32 failed on ${ v } expected ${ num }` );
				++failed;
			}
		} );
		console.log( `test binary.test_rotate_nat32 finished: passed ${ passed } failed ${ failed }` );
		return failed;
	}

}