# Ver qué proceso está ocupando el puerto 5000
lsof -i :5000

# O matarlo directamente
fuser -k 5000/tcp
# o también con:
kill -9 $(lsof -t -i:5000)