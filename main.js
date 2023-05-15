
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("welcome");
  await delay(700);
  createCode("connecting...","");
  await delay(1500);
  createText("this version of the site is no longer maintained.");
  await delay(600);
  createText("thank you for visiting");

  await delay(500);
  new_line();
}

/*
function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/netfrack";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "cmds"){
    trueValue(value);
    
    createCode("projects", "list of all the projects i've worked on");
    createCode("whois", "info on me");
    createCode("socials", "where to find me");
    createCode("nfo", "website info e.g version number");
    createCode("clear", "clears the terminal");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createCode("Twisp", "My frist real dive into language design, Twisp is a minimal Lisp dialect.");
  }
  else if(value === "whois"){
    trueValue(value);
    createText("hi, average ware developer here")
    createText("enjoyer of breaking software")
  }
  else if(value === "socials"){
    trueValue(value);
    createText("<a href='https://github.com/netfrack' target='_blank'><i class='fab fa-github white'></i>NetFraCk</a>")
    createText("<a href='https://www.twitter.com/netfrack' target='_blank'><i class='fab fa-twitter white'></i>@NetFraCk</a>")
    createText("<i class='fa-brands fa-discord white'></i>NetFraCk#0009")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }

  else if(value === "nfo"){
    trueValue(value);
    createCode("domain:", "netfrack.cf")
    createCode("version:", "2.1.0")
    createCode("framework:","vanilla")
    createCode("host:", "github")
    createCode("last modified:", "sept 30, 2022 @ 11:27pm gmt")
  }

  else if (value === "ami") {
    trueValue(value);
    createText('<i class="fa-solid fa-cat"></i>');
  }

  else if(value === "secret") {
    trueValue(value);
    createText('<a>https://pastebin.com/bQgq5mNK</a>');
  }

  else if(value === "n"){
    trueValue(value);
    createText("");
  }
  
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}
*/


function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();