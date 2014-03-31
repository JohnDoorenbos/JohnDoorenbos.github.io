#!/usr/bin/env python3

import json
import yaml
import os

print("Content-type: application/json")
print("Access-Control-Allow-Origin: *")
print("")
print(os.environ['QUERY_STRING'])
if 'QUERY_STRING' in os.environ:
#if True:
    if os.environ["QUERY_STRING"] != "":
       x = os.environ['QUERY_STRING']

       myLst = x.split("?")[1].split("&")



       removeLst = []
       for i in myLst:
           removeLst.append(i.split("=")[1])
       print(removeLst)    
       f = open("text.txt","r")
       dictionary = yaml.load(f)

       entryLst = []
       for project in dictionary:
           
           for entry in dictionary[project]:
               
                if entry[0] in removeLst:
               
                   entryLst.append(entry)
           for item in entryLst:
               dictionary[project].pop(entry,0)456
               print(1)
       f.close()
 
       print(dictionary)
       f = open("text.txt","w")
       yaml.dump(dictionary, f)
       f.close()
       


file = open("text.txt","r")
dictionary = yaml.load(file)
myList = []
for project in dictionary:
    x = "@" + str(project)
    myList.append(x)
    for entry in dictionary[project]:
        y = "#" + str(entry)
        myList.append(y)
        for prop in sorted(dictionary[project][entry]):
           z = "$" + str(dictionary[project][entry][prop])
           myList.append(z)
           #print(myList)
file.close()        
#in each level of the for loop, modify the key string to contain some symbol
#these Symbols will indicate where in the todo list we are at, as well as 
#the different properties, like priority, 

#Be able to add a tast in the html 
#On checkbox, make linethrough the text
#on submit, script should run that notices the QUERY_STRING environment variable
#and will then remove the checked items. If new tasks are added, add those and
#update page.

print(json.dumps(myList))
