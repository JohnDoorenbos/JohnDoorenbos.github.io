Stack = function(){
    var myList = new Array()
    
    this.push = function(item){
	myList.push(item)	
    }
    
    this.pop = function(){
	
	return myList.pop()
    }
	this.peek = function(){
		return myList[myList.length-1]
	}

	this.getStack = function(){
		return temp = clone(myList)
	}
	this.printStack = function(){
		document.getElementById("output").innerHTML = ""
		for(var i in myList){
			//console.log(myList[i])
		var newP = document.createElement("p")
		newP.innerHTML = myList[i]
		document.getElementById("output").appendChild(newP)
		}
	}
}

Queue = function(){
	var myList = new Array()
	
	
	this.enqueue = function(item){
		myList.unshift(item)	
	}
	
	this.dequeue = function(){
		return myList.pop()
	}

	this.getLength = function(){ 
		return myList.length
	}
	
	this.clear = function(){
		for(var i = 0; i<myList.length; i++){
			myList.pop()
		}
	}
	this.peek = function(){
		return myList[myList.length-1]
	}
	
	this.isEmpty = function(){
		return myList.length == 0
	}
}

 
numDiff = function(word1, word2,wordLength){
	
	errors = 0
	for(var i = 0; i<wordLength; i++)
	{
		if(word1[i] != word2[i]){
			errors ++
		}
	}	
	return errors
}

makeStack = function(array){
	var newStack = new Stack()
	for(var i in array){
		newStack.push(array[i])
	}
	return newStack
}


addRungs = function(used,q,wordLength,goal,wordList){   //needs q to be global, needs peek to be a method of stack

	//var tempQueue = clone(q)
	var tempQueue = q
	console.log(tempQueue)
	console.log(q)
	//for(var i = 0;i<q.getLength(); i++){
		//console.log(tempQueue.peek().pop())
	//}
	
	finished = false
	while( ! q.isEmpty() && ! finished ){ //Need to use a while loop.
		if(canceled){
			break
		}
		var tempStack = tempQueue.dequeue()
		current = tempStack.peek()
		//console.log(tempStack.peek())
		
		for(var x = 0; x<wordList.length; x++){
			y = 0
			//console.log(current)
			
			if(used.indexOf(wordList[x]) == -1){
			
				if(numDiff(current, wordList[x],wordLength)==1){
					//console.log("test")
					used.push(wordList[x]) //used words array
					//tempStack.push(threeLetterWords[x])
					
					var temp = makeStack(tempStack.getStack())
					
					temp.push(wordList[x])
					//console.log(threeLetterWords[x])
					q.enqueue(temp)   //currently the loop interates almost 800 more times if I uncomment this line.
					
					if(wordList[x] == goal){
						finished = true
						return temp
					}
					//console.log(threeLetterWords[x])
				}
			}
		}
 	}
}
 

///note to self. while not empty and not finished
wordLadder = function(input,output,wordLength){
	var current = input
	var finish = output
	var wordLength = wordLength 
	
	wordList = dictionary[wordLength-3]
	
	var used = new Array() //used words array hello 
	var q = new Queue()
	
	for(var i=0; i< wordList.length; i++){
		if(numDiff(current, wordList[i],wordLength) == 1){ 
			
			used.push(wordList[i]) //used words array
			
			var stack = new Stack()
			stack.push(current)
			stack.push(wordList[i])
			q.enqueue(stack)
			
		}
	}
	
	ladder = addRungs(used,q,wordLength,finish,wordList)	
	
	ladder.printStack()

}


myFunction = function(){
	var first = document.getElementById("text1").value
	var last = document.getElementById("text2").value
	console.log(first,last,first.length)
	wordLadder(first,last,first.length)


}

var canceled = false

cancel = function(){	
	this.canceled=true
	
}