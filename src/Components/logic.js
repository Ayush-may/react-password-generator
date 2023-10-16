export function generatePass(check, range){
    let t = ++range;
    let temp = '';

//Symbols = 33 - 47 , 58 - 63 , 91 - 96 , 123 - 126
//Numbers =  48 to 57
//lowerCase = 65 to 90
//UpperCase = 97 to 122
    let pass = '';
    while( true ){
        let random = Math.floor( Math.random() * 124 );

        if( !check.symbol &&
            !check.number &&
            !check.lowerCase &&
            !check.upperCase
            ){
                break;
        }


        if( check.symbol && (random >= 33 && random <= 47) ){
            t--;
            pass += String.fromCharCode(`${random}`);
        }
        else if( check.number && (random >= 48 && random <= 57) ){
            t--;
            pass += String.fromCharCode(`${random}`);
        }
        else if( check.upperCase && (random >= 65 && random <= 90) ){
            t--;
            pass += String.fromCharCode(`${random}`);
        }
        else if( check.lowerCase && (random >= 97 && random <= 122) ){
            t--;
            pass += String.fromCharCode(`${random}`);
        }

        if(t <= 0){
            break;
        }
    }

    return pass;
} 