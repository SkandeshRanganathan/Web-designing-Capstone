document.addEventListener('DOMContentLoaded', function() {
    const changeColorBtn = document.getElementById('changeColorBtn');

    changeColorBtn.addEventListener('click', function() {
        const colors = ['#ff6347', '#ffa500', '#4caf50', '#3498db', '#9b59b6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = `radial-gradient(antiquewhite , ${randomColor} , grey )`;
    });
})