function generateId() {
  return Math.random().toString(36).substr(2, 9); 
}
function generateUniqueId() {
  let id = 0;
  return function() {
    id++;
    return id;
  }
}

const getId = generateUniqueId();

for (let i = 0; i < 5; i++) {
  console.log(getId());
}

