var words = ['elephant',
    'tiger',
    'python',
    'java',
    'eagle',
    'sparrow',
    'monkey',
    'crocodile',
    'fish'];
var correctwordindex = [];
var correctwords = [];

function GetrandomWord()
{
   return words[Math.floor(Math.random() * words.length)];
}

var word = GetrandomWord();

function InitWord() {
    let w = ""
    for (let i = 0; i < word.length; i++) {
        if (i != word.length - 1) {
            w = w + " _,"
        } else {
            w = w + " _"
        }

    }
    document.getElementById('word').innerHTML = w;
}

function GenerateAllButtons() {
    let letters = "abcdefghijklmnopqrstuvwxyz".split('')
    let HtmlButtons = "";
    for (let i = 0; i < letters.length; i++) {
        HtmlButtons = HtmlButtons + '<button class="btn btn-circle btn-outline-light btn-sm" onclick="Handler(this)" value=' + letters[i] + '>' + letters[i] + '</button>';
    }
    document.getElementById('keyboard').innerHTML = HtmlButtons;
}

function Handler(btn) {
    let letter = btn.value;
    for (let i = 0; i < correctwords.length; i++) {
        if (letter === correctwords[i]) {
            return;
        }
    }
    correctwords.push(letter)
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            correctwordindex.push(i);
        }
    }
    console.log(correctwordindex);
    console.log(word);
    UpdateWord();
}
function UpdateWord() {
    var current_word = new Array();
    for (let i = 0; i < word.length; i++) {
        current_word.push(" _")
    }
    for (let i = 0; i < correctwordindex.length; i++) {
        current_word.splice(correctwordindex[i], 1, " " + word[correctwordindex[i]])
    }
    console.log(current_word);
    document.getElementById('word').innerHTML = current_word.toString();

}

function Reset()
{
    word = GetrandomWord();
    correctwords=[];
    correctwordindex=[];
    InitWord();
}
InitWord();
GenerateAllButtons()