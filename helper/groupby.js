



function groupByFour(items){
    var result = [];
    for (var i = 0; i<items.length; i+=5) {
        result.push(items.slice(i, i+5))
    }
    return result;
}



module.exports = groupByFour;