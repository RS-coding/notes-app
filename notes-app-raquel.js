//1.----------------------------------------------------------------------------//

const notes =[
    {
        title: 'Bank',
        description: 'Save 100€ every month to my account'
    },{
        title: 'Next trip',
        description:'Go to spain in the summer'
    },{
        title:'Health',
        description:'Dont´forget to do the exams'
    },{
        title:'Office' ,
        description:'Buy a  better chair and a better table to work'
    }

]

//12.-----------------------------------------------------------------------------//

const filters = {
    searchText: ''
}

//2.----------------------------------------------------------------------------//

const sortNotes = function (notes) {
    const organize = notes.sort(function (a, b) {

        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })

    return organize
}


//3.----------------------------------------------------------------------------//

const notesOutput = function (notes) {

        //17.------------------------------------------------//
        document.querySelector('#p-container').innerHTML = ''
        
        //8.------------------//
        sortNotes(notes)

        const ps = notes.forEach(function (note) {

            const title = document.createElement('h5')
            const description = document.createElement('p')

            title.textContent = note.title
            description.textContent = note.description

            document.querySelector('#p-container').appendChild(title)
            document.querySelector('#p-container').appendChild(description)
        })

        return ps
}

notesOutput(notes)

//13.---------------------------------------------------------------------------//

const renderNotes = function (notes, filters){
    
        //14.-----------------------------------------------//
        const filteredNotes = notes.filter(function(note){
            return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
        })

        
        //16-----------------------//
        notesOutput(filteredNotes)
    
    
}

renderNotes(notes,filters)


//7.----------------------------------------------------------------------------//

  const newNote = function (titleInput, descriptionInput) {
      notes.push({
          title: titleInput,
          description: descriptionInput
      })
      

 }
  
//5.----------------------------------------------------------------------------//

 const form = document.querySelector('#form-submit')
 const inputTitle = document.querySelector('#form-input-title')
 
 inputTitle.focus()

 form.addEventListener('submit', function(e){

        //6.-------------//
        e.preventDefault()

        //7.--------------------------------------------//
        const newTitle = e.target.elements.titleNote.value
        const newDescription = e.target.elements.descriptionNote.value

        newNote(newTitle, newDescription)
        

        //9.-----------------//
        notesOutput(notes)
        console.log(notes)
        
        e.target.elements.titleNote.value = ''
        e.target.elements.descriptionNote.value = ''
        
        inputTitle.focus()

 })

//11.----------------------------------------------------------------------------//
 
const searchInput = document.querySelector('#search-note')

searchInput.addEventListener('input', function(e){
    
        //15.--------------------------//
        filters.searchText = e.target.value
        renderNotes(notes, filters)
    
})
