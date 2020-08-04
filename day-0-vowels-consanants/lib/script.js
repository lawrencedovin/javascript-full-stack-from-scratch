var array = [1,2,3,4];

function greaterThan(value) {
    console.log(value.filter(el => el > 2));
}

greaterThan(array);

function vowelsAndConsonants(s) {
    var vowels = 'aeiou';
    var vowel_list = [];
    var consonant_list = [];

    for(var i = 0; i < s.length; i++) {
        if(vowels.indexOf(s[i]) !== -1) {
            vowel_list.push(s[i]);
        } else {
            consonant_list.push(s[i]);
        } 
    }

    vowel_list.forEach(vowel => {console.log(vowel)});
    consonant_list.forEach(consonant => {console.log(consonant)});
}

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consonants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       } else {
           consonants += s[i] + '\n';
       }
    }
    
    console.log(consonants);
}

vowelsAndConsonants('aerasdk');