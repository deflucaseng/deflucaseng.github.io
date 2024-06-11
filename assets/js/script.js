const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Load textures
const loader = new THREE.TextureLoader();
const textures = [
    loader.load('path/to/image1.jpg'),
    loader.load('path/to/image2.jpg'),
    loader.load('path/to/image3.jpg'),
    loader.load('path/to/image4.jpg'),
    loader.load('path/to/image5.jpg'),
    loader.load('path/to/image6.jpg')
];

loader.load('assets/images/websitebackground3.png', function(texture){
	scene.background = texture;

});

// Create canvas texture for text
function createTextTexture(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;
    context.fillStyle = 'white'; // Set the background color to white
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black'; // Set the text color to black
    context.font = '48px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    return new THREE.CanvasTexture(canvas);
}

// Define materials for each face of the cube
const materials = [
    new THREE.MeshBasicMaterial({ map: createTextTexture('Face 1') }), // Image texture
    new THREE.MeshBasicMaterial({ map: createTextTexture('Face 2') }), // Image texture
    new THREE.MeshBasicMaterial({ map: createTextTexture('Face 3') }), // Text texture
    new THREE.MeshBasicMaterial({ map: createTextTexture('Face 4') }), // Text texture
    new THREE.MeshBasicMaterial({ map: createTextTexture('Face 5') }), // Image texture
    new THREE.MeshBasicMaterial({ map: createTextTexture('Face 6') })  // Image texture
];


// Create a cube with a single color
const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff }); // Set color to green
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

// Position the camera
// Position the camera
camera.position.z = 5;



// Set the cube's position

// Position the cube



const boxes = {};
document.querySelectorAll('.single-text-box, double-text-box').forEach(box => {
  const id = box.getAttribute('data-id');
  boxes[id] = box;
});

// Initial setup for the cube position
const aspect = window.innerWidth / window.innerHeight;
const height = 2 * Math.tan((camera.fov / 2) * Math.PI / 180) * camera.position.z;
const width = height * aspect;
const worldX = 0;

let targetPosition = new THREE.Vector3(worldX, 0, 0); // Start position
let targetRotation = new THREE.Euler(0, 0, 0); // Start rotation

const introparagraph = document.querySelector('#intro-paragraph');
if (!introparagraph) {
    console.error("Element with id 'intro-paragraph' not found.");
}



const animate = (element, scrollsetting)

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY < 500) {
        targetPosition.set(worldX, 0, -scrollY * 0.005);
        targetRotation.set(0, scrollY * 0.002125, 0);
    } else if (scrollY < 1000) {
        targetPosition.set(worldX - (scrollY - 500) * 0.01, 0, -2.5);
        targetRotation.set(0, scrollY * 0.002125, 0);
        const position = 100 + (scrollY * 0.4); // Adjusted multiplier for translateX
        if (introparagraph) {
            console.log(`Translating paragraph to: ${position}px`); // Debugging
            introparagraph.set(0, position, 0);
        }


    } else if (scrollY < 1500) {
        // First break period (500 pixels)
        // No change in position or rotation
    } else if (scrollY < 2000) {
        targetPosition.set(worldX - 5 + (scrollY - 1500) * 0.01, 0, -2.5);
        targetRotation.set(0, (scrollY - 1500) * 0.002125 + 2.125, 0); // Adjust rotation continuation
    } else if (scrollY < 2500) {
        // Second break period (500 pixels)
        // No change in position or rotation
    } else if (scrollY < 3000) {
        targetPosition.set(worldX - 5 + (scrollY - 2000) * 0.01, 0, -2.5);
        targetRotation.set(0, (scrollY - 2000) * 0.002 + 2.125, 0);  //Good up to here
    } else if (scrollY < 3500) {
        // Third break period (500 pixels)
        // No change in position or rotation
    } else if (scrollY < 4000) {
        targetRotation.set(0, (scrollY - 1750) * 0.0025, 0); // first roll
    } else if (scrollY < 4500) {
        // Third break period (500 pixels)
        // No change in position or rotation
    } else if (scrollY < 5200) {
        targetRotation.set(0, (scrollY - 1750 - 500) * 0.0025, 0);
	} else if (scrollY < 5700) {
        // Third break period (500 pixels)
		
    } else if (scrollY < 5825) {
        //targetPosition.set(-2.5 + (scrollY - 5700) * 0.005, 0, -2.5 + (scrollY - 5700) * 0.005); // Move to the middle of the screen
		targetPosition.set(0, 0, 0); // Position at the center of the screen

        targetRotation.set(0, (scrollY - 2020) * 0.0025, 0); // Quarter rotation to the middle
    } else{
		targetPosition.set(0, 0, 0); // Position at the center of the screen
		targetRotation.set(0, 0, 0);

	}
});

// Animation loop for smooth transitions
function animate() {
    requestAnimationFrame(animate);

    // Smoothly interpolate the position and rotation
    cube.position.lerp(targetPosition, 0.1);
    cube.rotation.x += (targetRotation.x - cube.rotation.x) * 0.1;
    cube.rotation.y += (targetRotation.y - cube.rotation.y) * 0.1;
    cube.rotation.z += (targetRotation.z - cube.rotation.z) * 0.1;
	

    renderer.render(scene, camera);
}

animate();
