function rot13(str) {
    let newWord = ""
     let alpha = 
     'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
     for (let i in str){
      if (str[i]){
        char = str[i]
        newChar = char.replace(/[a-z]/gi, x => alpha[alpha.indexOf(x) + 13])
        newWord += newChar
        }
     }
      return newWord
   }

console.log(rot13("I really like fast cars"))
console.log(rot13("EBG13 rknzcyr."))
console.log(rot13("Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)"))