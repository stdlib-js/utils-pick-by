/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var fromCodePoint = require( '@stdlib/string-from-code-point' );
var pkg = require( './../package.json' ).name;
var pickBy = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var obj;
	var key;
	var o;
	var i;

	function predicate( key, value ) {
		return ( value > 10 );
	}

	obj = {};
	for ( i = 0; i < 26; i++ ) {
		key = fromCodePoint( 97+(i%26) );
		obj[ key ] = i;
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		o = pickBy( obj, predicate );
		if ( typeof o !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( typeof o !== 'object' ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
