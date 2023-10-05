const todoList = [];


function rendercomment(){  
    let todolistHTML = '';

    for (let i=0; i < todoList.length; i++){
      const todo = todoList[i];
      const html = `<p>${i}${todo}</p>`;
       todolistHTML += html;
      
    }

    console.log(todolistHTML);
    document.querySelector('.contacts').innerHTML = todolistHTML;

    localStorage.setItem('conclusion',todolistHTML);
    
 };


function sending() {

    const nameElement = document.querySelector('.input-name');
    const firmElement = document.querySelector('.input-firm');
    const numberElement = document.querySelector('.input-number');
    const commentElement = document.querySelector('.comment');

    const name = nameElement.value;
    const firm = firmElement.value;
    const number = numberElement.value;
    const comment = commentElement.value;

    todoList.push(name,firm,number,comment);

    nameElement.value = '';
    firmElement.value = '';
    numberElement.value = '';
    commentElement.value = '';



  

    console.log(todoList);
    rendercomment()  
    
}