const namesInput = document.getElementById('names');
const spinBtn = document.getElementById('spin-btn');
const wheel = document.getElementById('wheel');
const result = document.getElementById('result');

let names = [];
let remainingNames = [];

spinBtn.addEventListener('click', () => {
  if (namesInput.value.trim() === '') {
    alert('Please enter names!');
    return;
  }

  // Split names by comma and trim whitespace
  names = namesInput.value.split(',').map(name => name.trim());
  remainingNames = [...names];

  // Clear previous wheel segments
  wheel.innerHTML = '';

  // Create wheel segments
  createWheelSegments();

  // Spin the wheel
  spinWheel();
});

function createWheelSegments() {
  const segmentAngle = 360 / names.length;

  names.forEach((name, index) => {
    const segment = document.createElement('div');
    segment.className = 'segment';
    segment.style.transform = `rotate(${segmentAngle * index}deg)`;
    segment.style.backgroundColor = `hsl(${(index * segmentAngle) % 360}, 70%, 50%)`;
    segment.textContent = name;
    wheel.appendChild(segment);
  });
}

function spinWheel() {
  if (remainingNames.length === 0) {
    result.textContent = 'All names have been spun!';
    return;
  }

  // Randomly select a name
  const randomIndex = Math.floor(Math.random() * remainingNames.length);
  const selectedName = remainingNames[randomIndex];

  // Remove the selected name from the remaining names
  remainingNames.splice(randomIndex, 1);

  // Calculate the angle for the selected segment
  const segmentAngle = 360 / names.length;
  const targetAngle = 360 * 5 + (segmentAngle * randomIndex); // Spin 5 full rotations + offset

  // Apply the spin animation
  wheel.style.transform = `rotate(${targetAngle}deg)`;

  // Display the result after the spin
  setTimeout(() => {
    result.textContent = `Selected: ${selectedName}`;
  }, 3000); // Match the duration of the spin animation
}