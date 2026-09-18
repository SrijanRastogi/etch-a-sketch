const grid = document.querySelector(".container");

function createGrid(userValue) { 
for(let i = 0; i < userValue ** 2; i++) 
    {
        const div = document.createElement("div"); 
        div.classList.add("grid-box"); 
        div.style.width = (1008 / userValue) + "px";
        div.style.height = (1008 / userValue) + "px";
        let count = 0;
        let r;
        let g;
        let b;

        div.addEventListener("mouseenter",function() {
            count++;
            if (count === 1) {
                r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
            }

            else {
                r = Math.floor(r * 0.9);
                g = Math.floor(g * 0.9);
                b = Math.floor(b * 0.9); 
            } 
             div.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
        grid.appendChild(div) ;
    }
}


createGrid(16);

const resize = document.querySelector("#size");
resize.addEventListener("click", () => 
    {
    let input = prompt("Enter New Size of Grid: ");
    let userValue = Number(input);
    if (!isNaN(userValue) && 
        userValue > 0 && 
        userValue <= 100) {
            grid.innerHTML = "";
            createGrid(userValue); 
        }
    });



