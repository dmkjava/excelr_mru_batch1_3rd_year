// removing duplicates 
var nos = [10, 12, 10, 15, 12, 20, 5, 10, 15, 5]
let unk_nos= []
for (el of nos){
    console.log(el);
    
    if (!unk_nos.includes(el))
        unk_nos.push(el);
}
console.log(nos)
console.log(unk_nos)