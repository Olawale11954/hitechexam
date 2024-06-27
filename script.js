// Getting all requairement

const start_btn = document.querySelector(".start_quiz button");
const intrucBox = document.querySelector(".instruction-box");
const exit_btn = intrucBox.querySelector(".quit");
const continue_btn = intrucBox.querySelector(".continue");
const classBox = document.querySelector(".classes");


start_btn.onclick = ()=>{
    intrucBox.classList.add("activeBox");
}
exit_btn.onclick = ()=>{
    intrucBox.classList.remove("activeBox");
}
continue_btn.onclick = ()=>{
    intrucBox.classList.remove("activeBox");
    classBox.classList.add("activeClass");
}