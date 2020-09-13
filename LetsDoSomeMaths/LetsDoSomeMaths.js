let configurationObject = {
}

async function loadWASM() {
	let response = await fetch('./LetsDoSomeMaths.wasm');
	let arrayBuffer = await response.arrayBuffer();
    let wasmModule = await WebAssembly.instantiate(arrayBuffer, configurationObject);
    doubler = await wasmModule.instance.exports.doubler;
    square = await wasmModule.instance.exports.square;
    half = await wasmModule.instance.exports.half;
    add = await wasmModule.instance.exports.add;
    sub = await wasmModule.instance.exports.sub;
    product = await wasmModule.instance.exports.product;
    divide = await wasmModule.instance.exports.divide;
}

loadWASM();
