import { inputReceived } from "../service/init.service.js";
import { initWord } from "../service/init.service.js";

// Declarando botão submit
const button = document.getElementById('sub');

// Adicionando evento de click ao botão
button.addEventListener('click', ()=>{
    event.preventDefault();
    inputReceived(initWord);
});

