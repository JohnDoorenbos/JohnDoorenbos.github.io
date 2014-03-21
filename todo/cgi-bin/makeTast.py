import os

if 'QUERY_STRING' in os.environ:
    if os.environ["QUERY_STRING"] != "":
        print("<code>", os.environ['QUERY_STRING'],  "</code>")
