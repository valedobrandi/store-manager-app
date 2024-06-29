const routes = await fetch('http://backend:3001/');
const response = await routes.json();

console.log(response);
