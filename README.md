const fetchTodos = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
}