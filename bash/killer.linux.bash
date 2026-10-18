# Consultar el proceso del puerto 5000
lsof -i :5000

# Eliminar directamente el proceso que está ocupando el puerto 5000
fuser -k 5000/tcp
# o también con:
kill -9 $(lsof -t -i:5000)