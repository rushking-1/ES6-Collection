
  var count_same_elements=(collection)=> {
    var arr = [];
    
    collection.sort()
    for (var i = 0; i < collection.length;) {
      var count = 0;
      for (var j = i; j < collection.length; j++) {
        if (collection[i] === collection[j]) {
          count++;
        }
      }
      arr.push({
        key: collection[i],
        count: count
      })
      i+=count;
    }
   
  return arr;
  
  
  }


module.exports = count_same_elements;
