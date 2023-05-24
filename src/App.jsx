import React,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';





export default function App() {



const [todo,setTodo] = useState([]);



const getData = async ()=>{
const data = await fetch('https://jsonplaceholder.typicode.com/todos');
const jsonData = await data.json();
setTodo(jsonData)
}




useEffect(()=>{
getData();
},[])




return (
<div>
<Container className='mt-5 pt-5'>
<h1 className='text-center mb-5'>Todo List</h1>
<Table striped bordered hover>
<thead>
<tr>
<th>#</th>
  <th>Title</th>
<th>Completed</th>
</tr>
</thead>
<tbody>
{
todo.map((item,index)=>{
return(
<tr key={index}>
<td><input type="checkbox" name="g" id="" /></td>
<td>{item.title}</td>
<td>{item.completed}</td>
</tr>
)
})
}

</tbody>
</Table>
</Container>




</div>
)
}





