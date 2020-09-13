let configurationObject = {
}

async function loadWASM() {
    let response = await fetch('./HelloWebAssembly.wasm');
    let arrayBuffer = await response.arrayBuffer();
    let wasmModule = await WebAssembly.instantiate(arrayBuffer, configurationObject);
    let helloWebAssembly = await  wasmModule.instance.exports.helloWebAssembly;
}