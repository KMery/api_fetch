# Objetivo:
Demostrar el conocimiento aprendido sobre promesas al trabajar con datos asíncronos desde una API pública de test.
Renderizar los datos en HTML y estilarlos, de manera que los datos obtenidos parezcan posts de una red/blog.

# Inicio del proyecto
URL a utilizar:
    https://jsonplaceholder.typicode.com/users/1/photos

Los objetos obtenidos tendrán la siguiente estructura:
    {
        "albumId": number,
        "id": number,
        "title": string,
        "url": string,
        "thumbnailUrl": string
    },

Se utilizarà solo imagen y título para renderizar en la vista.

Cada objeto obtenido se irá añadiendo a la vista del HTML a la medida que son obtenidos.
Deben estar diferenciados de cada uno. En este caso se utilizará un div que contenga los datos a utilizar.


# Fuentes:
Métodos de petición HTTP
    https://developer.mozilla.org/es/docs/Web/HTTP/Methods

API test
    https://jsonplaceholder.typicode.com/
