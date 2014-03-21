


myFunction = function() {
    var request = new XMLHttpRequest();
    var URL = "http://localhost:8000/cgi-bin/todo.py"

    request.onreadystatechange = function() {
        console.log("in function: " + request.readyState)
        if (request.readyState==4 && request.status==200)
        {
            console.log(request.responseText)
	    console.log(1)
	    
	    var A = JSON.parse(request.responseText)
            var form = document.getElementById("form1")             
	    var mylist = document.getElementById("Todo_list")
            for(var i = 0; i<A.length;i++) {
		//for(i in A){
		if(A[i][0] == "@"){
		    var h1 = document.createElement("h1")
		    h1.innerHTML = A[i].slice(1)
		    form.appendChild(h1)
		}
		
		////////////////////////////////////////////////////////////////
		if(A[i][0]=="#"){
		    //var form = document.createElement("form")
		    //form.setAttribute('method', 'get')
		    //form.setAttribute('action', '/cgi-bin/evaluateTasks.py')
		    var form = document.getElementById("form1")
		    var task = document.createElement('input')
		    task.type = "checkbox"
		    task.name = "task"
		    task.value = A[i][1]
		    task.id = "cats"
		    
		    var newLabel = document.createElement("label")
		    newLabel.setAttribute("for","cats")
		    newLabel.innerHTML= (A[i].slice(2))
		    newLabel.strike = function(){
			if(this.style.textDecoration==""){
			    this.style.textDecoration="line-through"	    
			}
			else{
			    this.style.textDecoration=""	    
			}
		    }
		    
		    /*The following 3 lines work because the dictionary contain
		    *ing the properties has been sorted, requiring that everytime
		    * it be in the order: description,dueDate,priority*/
		    task.description = A[i+1].slice(1)
		    task.dueDate = A[i+2].slice(1)
		    task.priority = A[i+3].slice(1)
		    task.label = newLabel

		    task.onclick = function(){this.label.strike()}
		    

		    form.appendChild(task)
		    form.appendChild(newLabel)
		    br = document.createElement("br")
		    form.appendChild(br)
		    //DO SOMETHING IF THE ITEM IS A CHECKLIST ENTRY

		}
		///////////////////////////////////////////////////////////////////
		  
	
	    }

        }
    }   
    
    request.open("GET",URL,true);
    request.send();
}

window.onload = myFunction
