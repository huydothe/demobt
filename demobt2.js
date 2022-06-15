let num=window.prompt();
let str=num.toString();
let result=[str[0]];
for (let i=0; i<num.length; i++ ){
    if(str[i]%2 === 0){
        result.push('-', str[i]);
    }else{
        result.push(str[i]);
    }
}document.write(result.join(''));
