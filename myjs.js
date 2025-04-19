<script>

        const newTaskInput = document.getElementById("new-task");
        const addButton = document.getElementById("add-button");
        const taskList = document.getElementById("task-list");
        
        
        addButton.addEventListener("click", addTask);
        

        newTaskInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addTask();
            }
        });
        

        function addTask() {

            const taskText = newTaskInput.value.trim();
            

            if (taskText !== "") {

                const listItem = document.createElement("li");
                

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.addEventListener("change", function() {

                    taskSpan.classList.toggle("completed");
                });
                

                const taskSpan = document.createElement("span");
                taskSpan.className = "task-text";
                taskSpan.textContent = taskText;
                

                const deleteButton = document.createElement("button");
                deleteButton.className = "delete-btn";
                deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
                deleteButton.addEventListener("click", function() {

                    taskList.removeChild(listItem);
                });
                

                listItem.appendChild(checkbox);
                listItem.appendChild(taskSpan);
                listItem.appendChild(deleteButton);
                

                taskList.appendChild(listItem);
                

                newTaskInput.value = "";
                
                
                newTaskInput.focus();
            }
        }
    </script>