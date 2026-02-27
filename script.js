const bigCont = document.querySelector(".big-container");

/* Button to clear the board, ask for input to decide the number of squares, then call the function with the input passed in*/
const btnInput = document.querySelector(".btnInput")
btnInput.addEventListener("click", function() { 
    bigCont.replaceChildren();
    let userInput = prompt("Select a grid size between 16 and 100. A size 16 grid means 16x16 canvas, bigger size uses more resources.", 50);
    amount = Math.max(16, Math.min(100, userInput))  
    mkGrid(amount);
})

/* The function to create squares inside the bigcont*/

mkGrid = function(amount) {
let size = (960/(amount));
for (let i = 0; i < (amount*amount); i++) {
    let boxName = `box${i}`;
    boxName = document.createElement("div");
    boxName.className = "small-container";
    boxName.style.width =  `${size}px`;
    boxName.style.height = `${size}px`;    
    bigCont.appendChild(boxName);
    console.log(`${size}`)
}
}

/* Change function*/
const changeColor = function(e) {
    if (e.target.className === "small-container") {
        const rgbRandomize = function() {
            let x = Math.floor(Math.random() * 256); // range is 0-255
            let y = Math.floor(Math.random() * 256);
            let z = Math.floor(Math.random() * 256);
            let randomColor = "rgb(" + x + "," + y + "," + z + ")"; 
            console.log(randomColor);
            e.target.style.backgroundColor = randomColor                        
    }
    rgbRandomize()
        
    }
}

/* Mouseover event listener*/
const allBoxes = document.querySelectorAll(".small-container");
bigCont.addEventListener("mouseover", changeColor);



mkGrid(50)





