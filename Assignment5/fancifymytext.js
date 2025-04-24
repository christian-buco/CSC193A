function makeBigger(){
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancifyText() {
    let textArea = document.getElementById("textInput");

    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
}

function boringText() {
    let textArea = document.getElementById("textInput");
 
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
}

function mooText() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ");
}