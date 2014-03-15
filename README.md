#BAtrainAPI

##Una API para los trenes en vivo de Buenos Aires usando nodeJS.

Devuelve un JSON con la cantidad de trenes en circulación, las coordenadas de cada uno, velocidad y algunos datos más.

```
{
    "line": "mitre",
    "ramal": "tigre",
    "timeStamp": "Sat Mar 15 2014 00:03:06 GMT+0000 (UTC)",
    "trainsInCirculation": 6,
    "formations": [
        {
            "destination": "tigre",
            "id": 2005,
            "latitude": -34.583901,
            "longitude": -58.385589,
            "ramal": 5,
            "speed": 37,
            "status": 1,
            "movingStatus": 1,
            "trainID": 3111,
            "lineOrden": 63
        },
```
  
Aca sigue el array con todos los trenes.

Obtiene la información de la misma url que los mapas en vivo, pero parsea el string que devuelve y arma un json legible.

##Instalación
- Clona el repository
- 'npm install' deberia instalar todas las dependencies y salir andando ya que creo que el package.js esta ok.
- node app.js


##Como usarlo
Las lineas que andan por ahora son:
- tigre
- mitre
- jlsuarez
- moreno
- laplata

Agregar el nombre de la line detras de la base url y listo.

ej: http://localhost:5000/tigre

##JSONP para el front end
agregale un callback y listo
ej: http://localhost:5000/tigre?callback=yourfunction

##Probá el demo aca
http://batrainapi.herokuapp.com/

**Por ahora no usa CORS. Pero tiene jsonp.**





