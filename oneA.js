

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love';
function countWords(paragraph ,word1, word2){
    let countWord1 = 0;
    let countWord2 = 0;

    res = paragraph.split(' ');
    for(let i=0;i<res.length;i++) {
        if(res[i] == word1) {countWord1++; };
        if(res[i] == word2) {countWord2++; };
    };
    
    if(countWord1>countWord2) {return word1;} else {return word2;};
};

console.log(countWords(paragraph,'love', 'you'));