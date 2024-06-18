const languages = ["java","javascript","python"];

// Aam Zindagi
console.log(languages[0]);
console.log(languages[1]);

// Mentos Zindagi

const [j, js, py] = languages;
console.log(j,js,py)

// Zyada Mentos zindagi
const moreLang = ["java","javascript","python","ruby","c","c++"];

const [java, javascript, python, ...others] = moreLang;  // using spread to caputre rest
console.log(java,javascript,python,others);

// combined both Languages and MoreLang
const allLang = [...languages,...moreLang];
console.log(allLang)

// lets get ruby and c

const [, , , , , , ruby,c ]=allLang
console.log(ruby,c)


// more use of spread

const num = [1,2,4];

function sumof3(a,b,c){
    return a + b + c;
}

sum3 = sumof3(...num);
console.log(sum3)

