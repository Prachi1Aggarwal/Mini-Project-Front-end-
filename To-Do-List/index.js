const task = document.getElementById('task');
const taskBtn = document.getElementById('taskBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');
const messageBox = document.getElementById('messageBox');

function showMessage(text, type = 'success') {
    messageBox.textContent = text;
    messageBox.classList.remove('hidden');
    messageBox.classList.remove('success', 'error');
    messageBox.classList.add(type);
    
    setTimeout(() => {
        messageBox.classList.add('hidden');
    }, 3000);
}

function createNewTask(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';
    
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-label';
    taskSpan.textContent = taskText;

    const btns = document.createElement('div');
    btns.className = 'task-btns';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    btns.appendChild(editBtn);
    btns.appendChild(deleteBtn);
    
    li.appendChild(taskSpan);
    li.appendChild(btns);

    return li;
}

taskBtn.addEventListener('click', () => {
    const taskText = task.value.trim();
    if (taskText === '') {
        showMessage('Task cannot be empty.', 'error');
        return;
    }
    
    const newTask = createNewTask(taskText);
    taskList.appendChild(newTask);
    task.value = '';
    showMessage('Task added successfully!', 'success');
});

// Event delegation for edit and delete buttons
taskList.addEventListener('click', (e) => {
    const target = e.target;
    const li = target.closest('.task-item');
    if (!li) return;

    if (target.closest('.edit-btn')) {
        const taskSpan = li.querySelector('.task-label');
        editTask(li, taskSpan);
    } else if (target.closest('.delete-btn')) {
        deleteTask(li);
    }
});

// Edit task functionality
function editTask(li, taskSpan) {
    const currentText = taskSpan.textContent;
    
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = currentText;
    editInput.className = 'edit-input';
    
    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';
    saveBtn.innerHTML = '<i class="fas fa-check"></i>';
    
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.innerHTML = '<i class="fas fa-times"></i>';

    li.replaceChild(editInput, taskSpan);
    
    const btns = li.querySelector('.task-btns');
    btns.innerHTML = '';
    btns.appendChild(saveBtn);
    btns.appendChild(cancelBtn);

    saveBtn.onclick = () => {
        const newText = editInput.value.trim();
        if (newText === '') {
            showMessage('Task cannot be empty.', 'error');
            return;
        }
        
        taskSpan.textContent = newText;
        li.replaceChild(taskSpan, editInput);
        
        btns.innerHTML = '';
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        
        btns.appendChild(editBtn);
        btns.appendChild(deleteBtn);
        showMessage('Task updated successfully!', 'success');
    };

    cancelBtn.onclick = () => {
        li.replaceChild(taskSpan, editInput);
        
        btns.innerHTML = '';
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        
        btns.appendChild(editBtn);
        btns.appendChild(deleteBtn);
    };
}

// Delete task functionality
function deleteTask(li) {
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (confirmed) {
        li.remove();
        showMessage('Task deleted successfully!', 'success');
    }
}

// "Clear List" functionality
clearBtn.addEventListener('click', () => {
    const confirmed = confirm('Are you sure you want to clear the entire list?');
    if (confirmed) {
        taskList.innerHTML = '';
        showMessage('All tasks have been cleared!', 'success');
    }
});
