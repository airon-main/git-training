let number = 0;
setInterval(() => {
    const countElement = document.getElementById('count');
    number++;
    countElement.innerHTML = number;
},1000)