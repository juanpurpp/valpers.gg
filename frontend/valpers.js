const { exec } = require("child_process");

console.log('Base de datos iniciada')
exec("cd ../backend & npm run start", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
console.log('Running frontend')
const front = exec("npm run serve");

front.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});
front.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});
front.on('error', (error) => {
    console.log(`error: ${error.message}`);
});
front.on("close", code => {
    console.log(`child process exited with code ${code}`);
});
console.log('Recordar que esta ejecución solo esta planeada para usuarios y no para desarrollo')
