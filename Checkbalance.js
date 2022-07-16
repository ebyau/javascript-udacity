let balance = -325;
let isactive = true;
let checkBalance = true;

// starts only if checkbalance === true
if (checkBalance === true){
    // case when account is active; balance could be <,> ,= zero 
    if(isactive === true & balance >0){
        console.log('Your balance is $ '+balance.toFixed(3))

    }
    else if(isactive===true && balance === 0){
        console.log('Your account is empty')
    }
    else if(isactive === true && balance<0){
        console.log('Your account balance is negative\nPlease contact bank')
    }
    // scenarioi when account is not active
    else if(isactive === false ){
        console.log('Your account is no longer active')

    }
    

}
else {
    console.log('Thank you, Have a nice day!')
}