#!/usr/bin/env python3

import json
import yaml
import os

print("Content-type: application/json")
print("Access-Control-Allow-Origin: *")
print("")


#print('''

#<form method="get">

#<input type="text" name="firstname" />
#<input type="text" name="lastname" />
#<input type="submit" value="submit"/>
#</form>
#''')



if 'QUERY_STRING' in os.environ:
    if os.environ["QUERY_STRING"] != "":
       x = os.environ['QUERY_STRING']

myLst = x.split("?")[1].split("&")



removeLst = []
for i in myLst:
    removeLst.append(i.split("=")[1])
    


f = open("text.txt","r")
dictionary = yaml.load(f)
print(dictionary)
for project in dictionary:

    for entry in dictionary[project]:
        if entry[0] in removeLst:
            dictionary[project].pop(entry,0)
print(dictionary)

 
#yaml.dump(f)
