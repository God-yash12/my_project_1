

function inc(value){
    return parseInt(value) + 1
}

function ifEq (a, b, opts) {
    if (a == b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
 }

 function dec(value){
    return parseInt(value) - 1
 }

function ifEqSmaller(value,opts){
    if(value<=0){
        return opts.fn(this);
    }
    return opts.inverse(this);
}
function ifEqGreater(value, length, opts,){
    if(( parseInt(value+1)* 10) >=length){
        return opts.fn(this);
    }
    return opts.inverse(this);
}

module.exports = { inc,ifEq,dec,ifEqSmaller, ifEqGreater }