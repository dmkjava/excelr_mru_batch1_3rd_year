
function add(a, b, ...c){
    console.log("c: ", c);
    let tot = a + b;
    for (x of c){
        tot = tot + x;
    }
    return tot;
}
// case -1:
result = add(10, 2)
console.log(result);

// case -2 : 
result =add(10, 2, 5)
console.log(result);

// case -3 :
result =add(10, 2, 5, 20)
console.log(result);
