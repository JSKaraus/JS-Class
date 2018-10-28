const _ = {
	clamp : function(number, lower, upper){
    let lowerClampValue = Math.max(number, lower);
  	let clampedValue = Math.min(lowerClampValue, upper);
  	return clampedValue;
  },
  
  inRange: function(number, start, end){
    if(end == null){
      end = start;
      start = 0;
    }
    
    if(start > end){
      let temp = start;
      start = end;
      end = temp;
    }
    
    const isInRange = (number,start, end) => {
      if(start <= number && number <= end){
        return true;
      }else{
        return false;
      }
    }
    
    return isInRange(number,start,end);
    
  },
  
  words: function(string){
    const words = string.split(' ');
    return words;
  },
  
  pad: function(string, length){
    if(string.length <= length){
	      const startPaddingLength  = Math.floor((length - string.length)/2);
      	const endPaddingLength = (length - string.length - startPaddingLength);
      	const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      
      	return paddedString;
    }else{
      return string;
    }
  },
  
  has: function(object, key){
   if(object[key]){
     return true;
   } else {
     return false;
   }
    
  },
  
  invert: function(object) {
    const invertedObject = {};
    for(let key of Object.keys(object)){
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    
    return invertedObject;
  },
  
  findKey: function(object, predicate){
    for(let key of Object.keys(object)){
      let value = object[key];
      const predicateReturnValue = predicate(value);
      if(predicateReturnValue == true){
        return key;
      } 
        
    };   
    return undefined;
  },
  
  drop: function(array, n) {
    if(n == null || n == undefined){
      n = 1;
    }
    
    const droppedArray = array.slice(n);
    return droppedArray;
  },
                                    
  chunk: function(array, size){
    if(size == undefined){
      size = 1;
    }
    
    const arrayChunks = [];
    
    for(let i = 0; i < array.length;){
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
      i = i + size;
    }
    return arrayChunks;
  },
  
  dropWhile: function(array, predicate){
    const dropNumber = array.findIndex(function(element, index){
      const returnValue = !predicate(element,index,array);
      return returnValue;
    });
    
    const droppedArray = this.drop(array,dropNumber);
    return droppedArray
  }
  
  
};



// Do not write or modify code below this line.
module.exports = _;