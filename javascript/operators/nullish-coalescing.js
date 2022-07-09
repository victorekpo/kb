// Nullish Coalescing Operator ( ?? )
// This operator is used to return the right-hand operand if the left-hand is null or undefined, and the left-hand otherwise.
// Difference between this operator and OR is that OR ( || ) returns any falsy value, including '' or 0, which can be considered useful in some cases. ?? only checks for null or undefined.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

a='';
b=null;
c=undefined;
d=0;
e="1";

result1=a ?? b;
result2=b ?? c;
result3=d ?? e;
result4=a || b;
result5=b || c;
result6=d || e;

console.log("1 "+result1,"2 "+result2,"3 "+result3);
console.log(result4,result5,result6);
