/// private: weight, social security number public: age, name, gainWeight(int), getSSN(), get Weight() 


PersonClass = function(weight, ssn, age, name){
    var weight = weight
    var ssn = ssn
    this.age = age
    this.name = name

    this.getSSN = function(){
	return ssn
    }
    
    this.getWeight = function(){
	return weight
    }
    
    this.gainWeight = function(lbs){
	weight = weight + lbs
	getWeight()
    }
}


PersonClass.prototype.birthday = function() {
    this.age = this.age + 1
    return this.age
}
