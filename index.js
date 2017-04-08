function map(collection, callback) {
  var result = [];

  for (let i = 0, l = collection.length; i < l; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }

  return result;
}
