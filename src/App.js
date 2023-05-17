import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [todo, setTodo] = useState([
    // {
    //   task: "Working on Todo List"
    // },
    // {
    //   task: "Pass JavaScript"
    // }
  ])

  

  const Create = (props) => {
      const [createTodo, setCreateTodo] = useState("")

      const formSubmit = (e) => {
        e.preventDefault()

        if (createTodo.length === 0){
          console.log("CANNOT BE BLANK!!");
          return;
          
        }

        const todoCheck = {
          text: createTodo,
          complete: false
        }


        console.log("submitted this >>>", createTodo)

        setTodo([...todo, todoCheck])
      }

      // const Create and this return are WRAPPED together so everything is defined!!

      return(
          
        <div>
          
          <form onSubmit={formSubmit}>

            <h3>Create Todo: {JSON.stringify(createTodo)}</h3>

            <input value={createTodo} onChange={e => setCreateTodo(e.target.value)}/>

            <button className="button">New Todo</button>
           
          </form>

        </div>
            
      )    
  }      

  // Create the deleteTask const

  const deleteTask = (deleteIndex) => {
    console.log("delete", deleteIndex)

    const filteredTodos = todo.filter((eachOneTask, filterIndex) => {
      if (filterIndex === deleteIndex){
        return false
      } else {
        return true
      }
    })

    setTodo(filteredTodos)
    console.log("filteredTodos", filteredTodos)
  }

  const handleUpdateTodos = (updateIndex) => {
    const updatedTodos = todo.map((todo, i) => {
      if (updateIndex === i) {
        todo.complete = !todo.complete
      }
      return todo
    })

    setTodo(updatedTodos)
     
  }


  
  // Where all the information is displayed because this return belongs to the Function App

  return(
    <div className="App">
      <h1>Todo List</h1>
      <hr/>
       <Create/> {/*the const create is passed in here */}
       <br/>
       <h2>List of Todos:</h2>
      {
          todo.map((eachTask, taskIndex) => {

            const todoLineClass = []

            if (eachTask.complete){
              todoLineClass.push("line")
            }


            return ( <div key={taskIndex}>
              <li>
                {/* {eachTask.task} */}
                <span className={todoLineClass.join(" ")}>{eachTask.text}</span>
                <input onChange={(e) => handleUpdateTodos(taskIndex)} checked={eachTask.complete} type="checkbox"/>
                <button className='delete' onClick={() => deleteTask(taskIndex)}>Delete</button>
              </li>
            </div>

            )
          })
      }  
    </div>
  );
}


export default App;