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

addRungs = function(used,q,wordLength){   //needs q to be global, needs peek to be a method of stack

	var tempQueue = clone(q)
	console.log(tempQueue)
	console.log(q)
	//for(var i = 0;i<q.getLength(); i++){
		//console.log(tempQueue.peek().pop())
	//}
	for(var i = 0; i<tempQueue.getLength(); i++){
		var tempStack = tempQueue.dequeue()
		current = tempStack.peek()
		//console.log(tempStack.peek())
		
		for(var x = 0; x<threeLetterWords.length; x++){
			y = 0
			//console.log(current)
			
			if(used.indexOf(threeLetterWords[x]) == -1){
			
				if(numDiff(current, threeLetterWords[x],wordLength)==1){
					console.log("meow")
					used.push(threeLetterWords[x]) //used words array
					tempStack.push(threeLetterWords[x])
					q.enqueue(tempStack)   //currently the loop interates almost 800 more times if I uncomment this line.
					//console.log(threeLetterWords[x])
				}
			}
		}
 	}
}
 


wordLadder = function(input,output){
	var current = input
	var finish = output
	var wordLength = 3 
	var used = new Array() //used words array hello 
	var q = new Queue()
	
	for(var i=0; i< threeLetterWords.length; i++){
		if(numDiff(current, threeLetterWords[i],wordLength) == 1){ 
			
			used.push(threeLetterWords[i]) //used words array
			
			var stack = new Stack()
			stack.push(current)
			stack.push(threeLetterWords[i])
			q.enqueue(stack)
			console.log("meow")
		}
	}
	
	addRungs(used,q,wordLength)	
}






