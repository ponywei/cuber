const cubeContainer = document.querySelector('.cube-container');
const cube = document.querySelector('.cube');

let isDragging = false;
let startX, startY;
let currentRotationX = 0;
let currentRotationY = 0;

cubeContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startX;  // 直接使用正值
        const deltaY = e.clientY - startY;  // 直接使用正值

        currentRotationX -= deltaY * 0.5;  // 反转 Y 轴旋转的符号
        currentRotationY += deltaX * 0.5;  // 反转 X 轴旋转的符号

        cubeContainer.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

        startX = e.clientX;
        startY = e.clientY;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

cubeContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
    if (isDragging) {
        const deltaX = e.touches[0].clientX - startX;  // 直接使用正值
        const deltaY = e.touches[0].clientY - startY;  // 直接使用正值

        currentRotationX -= deltaY * 0.5;  // 反转 Y 轴旋转的符号
        currentRotationY += deltaX * 0.5;  // 反转 X 轴旋转的符号

        cubeContainer.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }
});

document.addEventListener('touchend', () => {
    isDragging = false;
});

// Add click event to each cube cell
document.querySelectorAll('.face div').forEach(cell => {
    cell.addEventListener('click', (e) => {
        alert(`You clicked on: ${e.target.innerText}`);
    });
});