import react, { useState, ChangeEvent} from 'react'

const SearchField = () => {
    
      const [filterElement, setFilterElement] = useState(document.querySelector<HTMLElement>(
      "main #search-input input"
    ))

        
const [search, setSearch] = useState<string | null>(null)


// function handleChange(){
//      if(filterElement?.textContent != '' )
//         // setFilterElement()
//     }
    
    // filterElement?.addEventListener("input", handleChange);

  // console.log(filterElement);

    // const tasksCards = document.querySelectorAll<HTMLElement>(".cards li");


    
  return (
    <div id="search-input">
          <p>Já possui uma tarefa?</p>
          <input type="text" placeholder="Buscar Tarefa"></input>
        </div>
  )
}

export default SearchField