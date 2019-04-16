let Strings = function (text) {
    this.content = text.trim();
    this.getNumberOfWords = function () {
        var patt = /\s/g;
        var spaces = this.content.match(patt);
        this.numberOfWords = spaces.length +1;
    };
    this.getNumberOfVowels = function () {
        var patt = /[aeiou]/g;
        var spaces = this.content.match(patt);
        this.numberOfVowels = spaces.length;
    };
    this.getNumberOfConsonants = function () {
        this.numberOfConsonants=this.content.length -this.numberOfVowels - this.numberOfWords-1;
    }

    this.countNumberOfElements = function () {
        this.getNumberOfWords();
        this.getNumberOfVowels();
        this.getNumberOfConsonants();
        document.getElementById('result').innerHTML= 'This string has ' + this.numberOfWords + ' words, includes ' + this.numberOfVowels + ' Vowels and ' + this.numberOfConsonants + ' Consonants.';
    }
};
function start(result){
    let str = document.getElementById('str').value;
    let text =new Strings(str);
    text.countNumberOfElements(result)
}
