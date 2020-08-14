// Your code here

function mapToNegativize(sourceArray){
  let result = [];
  for (let i = 0; i < sourceArray.length; i++){
    result.push(sourceArray[i] * -1)
  }
  return result;
}

function mapToNoChange(sourceArray){
  return sourceArray;
}

function mapToDouble(sourceArray){
  let result = [];
  for (let i = 0; i < sourceArray.length; i++){
    result.push(sourceArray[i] * 2)
  }
  return result;
}

function mapToSquare(sourceArray){
  let result = [];
  for (let i = 0; i < sourceArray.length; i++){
    result.push(sourceArray[i] * sourceArray[i])
  }
  return result;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  for (let i = 0; i < sourceArray.length; i++){
    startingPoint = startingPoint + sourceArray[i];
  }
  return startingPoint;
}

function reduceAllToTrue(sourceArray){
  let result = true;
  for (let i = 0; i < sourceArray.length; i++){
   if (!sourceArray[i]);
  }
  return result;
}

function reduceAnyToTrue(sourceArray){
  let result = false;
  for (let i = 0; i < sourceArray.length; i++){
    if (!sourceArray[i])
      return true;
  }
  return result;
}