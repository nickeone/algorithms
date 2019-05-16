let str = '2324234((())()12)34';

let open = 0;
let close = 0;


for(let i = 0; i <=  str.length; i++ ){
    /* 	console.log(str[i]); */
    if(str[i] === '('){
        /* open = str[i]; */
        console.log(str[i]);
        open += 1;
        console.log('open', open);
    }
    if(str[i] === ')'){
        console.log(str[i]);
        close += 1;
        console.log('close', close);
    }
    if(close > open ){
        console.log('false');
        break;
    }
}

if( close === open){
    console.log('true');
}else{
    console.log('false');
}


console.log('openExt', open);
console.log('closeExt', close);

// safsadflasd