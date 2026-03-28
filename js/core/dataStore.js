let store = {};

export function setData(data) {
  store = data;
}

export function getData() {
  return store;
}