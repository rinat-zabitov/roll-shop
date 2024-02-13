function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
}
