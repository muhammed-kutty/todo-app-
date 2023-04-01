import './app.css'
import {useState} from 'react'
function App() {
  const [toDos,setToDos]= useState([])
  const [toDo,setToDo] = useState("")
  
  const addtodo=()=>{
    setToDos([...toDos,{ id:Date.now(), text:toDo,status:false}])
    setToDo("")
  }
 
 return(
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
       <br />
    </div>
    <div className="input">

      <input value={toDo} onChange={(e)=> setToDo(e.target.value)} type="text" id='inp' placeholder="🖊️ Add item..." />
      <i onClick={addtodo} className="fas fa-plus"></i>

    </div>

    <div className="todos">
     {  toDos.map((values,index)=>{
       return(
         <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(values)
            setToDos(toDos.filter(values2=>{
              if(values2.id === values.id){
                values2.status=e.target.checked
              }
              return values2            
            }))
          }} value={values.status}type="checkbox" name="name" id="" />
          <p>{values.text}</p>
        </div>
          <div className="right">
          <i onClick={()=> {
            console.log(values);
            setToDos(toDos.filter(vali=> vali.id!==values.id
            ))
          }} className=" fas fa-times "></i>
          </div>
      </div>)
      })}
    </div>
  </div>
 );
}

export default App;
