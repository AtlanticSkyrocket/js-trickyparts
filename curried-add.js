function curriedAdd(total) {
  if( total === undefined) {
    return 0;
  }
  
  total = total || 0;
  return function add(num) {
    if (num === undefined) {
      return total;
    }
    else {
      total += num;
      return add;
    }

  }
}

module.exports = { curriedAdd };
