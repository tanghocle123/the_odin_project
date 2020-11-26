// your javascript file

const container = document.querySelector("#container");

const content = document.createElement('div');

content.classList.add('content');
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red_text = document.createElement("p");
red_text.style.color = "red";
red_text.textContent = "Hey I'm red";
container.appendChild(red_text);


const blue_text = document.createElement("h3");
blue_text.style.color = "blue"
blue_text.textContent = "I'm a blue h3!";
container.appendChild(blue_text);

const sec_div = document.createElement("div");
sec_div.style.border = "1px solid black";
sec_div.style.backgroundColor = "pink";

    const h1 = document.createElement("h1");
    h1.textContent = "I'm in a div too!";
    
    const p = document.createElement("p");
    p.textContent = "ME TOO!";

    sec_div.appendChild(h1);
    sec_div.appendChild(p);

container.appendChild(sec_div);
