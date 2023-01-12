import fs from 'fs/promises';
const path = 'path/to/folder';

async function readDir(path) {
	const files = await fs.readdir(path);
	console.log(files); // array of file names
}
