const body = document.querySelector("body");
const daynight = document.getElementById("daynight");
const input = document.getElementById("input");
const tasklist = document.getElementById("taskList");
const button = document.getElementById("send");

daynight.addEventListener('click', ()=>{
    if(body.classList.toggle('dark-mode')){
        daynight.textContent = '☀️'
    }else{
        daynight.textContent = '🌙'
    }
});

button.addEventListener('click', ()=>{
    const li = document.createElement("li");

   
    tasklist.appendChild(li);
    li.className = 'li-element';

    let a = document.createElement('span');
    a.textContent = input.value;
    li.appendChild(a);

    let checkbox = document.createElement('checkbox')

    const editDelete = document.createElement('div');

    const editBtn = document.createElement('button');
    editBtn.textContent = '🖊️';
    editDelete.appendChild(editBtn)


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    
    editDelete.appendChild(deleteBtn)

    li.appendChild(editDelete)

    editBtn.addEventListener('click', ()=>{
        a.textContent = prompt(`${a.textContent} ozgartir`)
        
    })
    
    deleteBtn.addEventListener('click', ()=>{
    li.remove()
    })

    input.value = ''
});

