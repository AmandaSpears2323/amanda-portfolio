console.log("Hello World")
console.log(new Date().getFullYear())
document.getElementById("footer").innerHTML = ("Image Credit: Place Kitten " + (new Date().getFullYear()))
sayHello = () => {
    alert("this email is fake babe");
}
document.getElementById('About-Me').onmouseover = () => {
    document.getElementById('About-Me').innerText = 'BOO!';
};
document.getElementById("About-Me").onmouseleave = () => {
    document.getElementById('About-Me').innerText = 'About me';
}
let count = 1;
document.getElementById('btn-counter').onclick = () => {
    count = count + 1;
    if (count % 2 === 0) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
    document.getElementById('txt-counter').innerHTML = count
}
for (let i = 1; i <= 99; i = i + 1) {
    const newLi = document.createElement('li'); 
   newLi.textContent = i;
document.getElementById("numbers").appendChild(newLi)
if (count % 2 === 0) {
    document.getElementById('numbers').classList.add('even');
    document.getElementById('numbers').classList.remove('odd');
} else {
    document.getElementById('numbers').classList.add('odd');
    document.getElementById('numbers').classList.remove('even');
}
}

console.log(i = 0)