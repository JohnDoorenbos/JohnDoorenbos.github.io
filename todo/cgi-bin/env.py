#!/usr/bin/env python

import os

print("Content-type: text/html")   #maybe application/json
print("")
print('''

<form method="get">

<input type="text" name="firstname" />
<input type="text" name="lastname" />
<input type="submit" value="submit"/>
</form>
''')


#for key in sorted(os.environ):
#    print(key," : ", os.environ[key])
if 'QUERY_STRING' in os.environ:
    if os.environ["QUERY_STRING"] != "":
        print("<code>", os.environ['QUERY_STRING'],  "</code>")

#print(os.environ)
