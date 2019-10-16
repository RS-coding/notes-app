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

//

//2.----------------------------------------------------------------------------//

const sortNotes = function(notes){
    const organize = notes.sort(function (a, b) {

        if (a.title < b.title) {
            return -1
        } else if (a.title > b.title) {
            return 1
        } else {
            return 0
        }
    })

    return organize
}

sortNotes(notes)
console.log(sortNotes(notes))



//3.----------------------------------------------------------------------------//

 const notesOutput = function (notes){
     
    const ps = notes.forEach(function(note){

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

 //4.----------------------------------------------------------------------------//


  const newNote = function (titleInput, descriptionInput) {
      notes.push({
          title: titleInput,
          description: descriptionInput
      })
      sortNotes(notes)

 }
    

    

 const form = document.querySelector('#form-submit')
 const inputTitle = document.querySelector('#form-input-title')
 
 inputTitle.focus()

 form.addEventListener('submit', function(e){
     e.preventDefault()

     const newTitle = e.target.elements.titleNote.value
     const newDescription = e.target.elements.descriptionNote.value

      newNote(newTitle, newDescription)
      sortNotes(notes)
      notesOutput(notes)
      console.log(notes)
    
    e.target.elements.titleNote.value = ''
    e.target.elements.descriptionNote.value = ''
    
    inputTitle.focus()

 })

 