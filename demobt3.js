let str=window.prompt();
let upper='ABCDEFGHIKLMNOPQRSTUVWXYZ';
let lower='abcdefghiklmnopqrstuvwxyz';
let result=[];
for (i=0; i<str.length; i++){
    if(upper.includes(str[i])){
        result.push(str[i].toLowerCase());
    }else if(lower.includes(str[i])){
        result.push(str[i].toUpperCase());
    }else {
        result.push(str[i]);
    }
}document.write(result.join(''));
