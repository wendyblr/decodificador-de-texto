function mostrarTexto(tag, text) 
{
    let resultado = document.querySelector(tag);
    resultado.innerHTML = text;       
}

function telaDois()
{
    mostrarTexto("h3", "");
    mostrarTexto("h4", "");
    
    document.getElementById("notfound").style.display = "none";

    let botaoCopiar = document.getElementById("botaoCopiar");
    botaoCopiar.style.visibility = "visible";
    botaoCopiar.style.pointerEvents = "auto";
    
    document.getElementById("mensagemCopiada").style.visibility = "visible";
}

function converterCaracteres(entradaUsuario)
{
    return entradaUsuario
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z\s]/g, "");
}

function criptografarTexto() 
{
    let inputText = document.querySelector("textarea").value;

    if (converterCaracteres(inputText.trim()) != "")
    {
        let encryptedText = converterCaracteres(inputText.toLowerCase())
                            .replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
        
        mostrarTexto("h2", encryptedText);
        telaDois();  // Changed to telaDois()
        document.querySelector("textarea").value = ""; 
    }
    else
    {
        alert("Erro #01:\nDigite um texto válido.");
        return 1;
    }
}

function descriptografarTexto() 
{
    let textoDescriptografado = document.querySelector("textarea").value;
    
    if (converterCaracteres(textoDescriptografado.trim()) != "")
    {
        let decryptedText = converterCaracteres(textoDescriptografado.toLowerCase())
                            .replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
        
        mostrarTexto("h2", decryptedText);
        telaDois();  // Changed to telaDois()
        document.querySelector("textarea").value = "";
    }
    else
    {
        alert("Erro #01:\nDigite um texto válido.");
        return 1;
    }
}

function copiarTexto() 
{
    let textoCopiado = document.querySelector("h2").innerText;  // Changed to target the h2 tag
    
    navigator.clipboard.writeText(textoCopiado);
    document.querySelector("h2").innerText = "";  // Hide the copied text
    document.getElementById("mensagemCopiada").style.visibility = "hidden";
    // Remove location.reload() if page reload is not intended
} 
