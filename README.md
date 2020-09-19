# CVDS-Lab5-Grupo5



# Parte 1 - Jugando a ser un cliente HTTP
## Instalación de TelnetClient en Windows

.![panel de control](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/MicrosoftTeams-image.png)
.![activación del tenelclient](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/MicrosoftTeams-image%20(1).png)
.![error](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/MicrosoftTeams-image%20(2).png)

## Resultados de ejecución
**Revise el resultado obtenido. ¿Qué codigo de error sale?, revise el significado del mismo en la lista de códigos de estado HTTP.**

400 Bad Request: Este error se debe a que no puede procesar la solicitud debido a que hay un error de usuario como puede ser (Sintaxis, una solicitud mal formada, tamaño demasiado grande, enrutamiento de solicitud engañoso) entre otros. 

**Qué otros códigos de error existen?, ¿En qué caso se manejarán?**

**402 Payment Required**: Este código de error es usado cuando la forma de pago digital es necesaria, para completar la transacción. Esto incluye la necesidad de autenticación de credenciales y objetivos de recursos.


**403 Forbidden**: Este tipo de error sucede cuando los datos son válidos, pero el servidor rechaza la acción, debido a que el usuario no tiene permisos necesarios para completar la acción. 
o	404 Not Found: Este tipo de error nos indica que el recurso solicitado no ha sido encontrado, pero puede estar disponible en el futuro.


**407 Proxy Authentication Required**: Este error indica que el cliente primero de autenticarse con el proxy y ahí si realizar la respectiva acción. 

**409 Conflict**: Este tipo de error nos indica que no se puede procesar la solicitud debido a la generación de conflicto por parte del estado actual del recurso.


**410 Gone**: Indica que el recurso solicitado ya no esta disponible y no volverá a estar disponible. Esto se debe al que el curso ha sido eliminado intencionalmente y por tanto el recurso debe purgarse.


**413 Payload Too Large**: La solicitud es mayor que el servidor que desea procesar y por tanto la entidad es demasiado grande. 

**414 URI Too Long**: EL URI proporcionado (identificador uniforme de recursos) es demasiado largo para que el servidor lo pueda procesar, esto puede ser debido a largas longitudes de cadenas de datos. 



## GET/ html HTPP/1.0




## WC/HTLML




## ¿Cuál es la diferencia entre los verbos GET y POST? ¿Qué otros tipos de peticiones existen?

Tanto el metodo **GET** como **POST** son protocolos HTTP el cual se encargan de enviar al servidor como peticiones(request) y este recibe una respuesta a dicha solicititud (responde).

**GET**: Se encarga de obtener informacion del servidor, trae los datos que estan almacenados en el servidor, ya sea una base de datos o un archivo al cliente. Esto deriva independientemente de que tengamos que enviar(request) algun datos sera procesado, para luego devolver una respuesta(response.

**POST** : Este en cambio se encarga de enviar información desde el cliente para que este pueda ser procesada por y puede ser actualizadaa o agregada informacion en el servidor, como podria ser la carga o actualizacion en si de un articulo. Cuando se envia(request) datos a través de un formulario, estos son procesados y leugo a traves de una redireccion, se devuelve un (response) alguna página con información.

Tanto **GET** como **POST** solicitan una respuesta al servidor. Enviar datos en una **URL** y actualizar o insertar dicha informacion, este podria ser un metodo **POST** Y seria un llamado **GET**. Por tango se puede concluir que las llamadas por metodo **GET** pueden ser cacheadas( historial de navegador), indexadas por un navegador. El metodo **POST** no puede realalizar dicha tarea. 

Generalmente usamos links para ejecutar llamadas GET ya que la idea del link es simplemente “solicitar” una información (pagina) al servidor y que sea devuelta como una respuesta. Mientras usamos formularios para actualizar datos, como artículos, usuarios, etc. también en cuenta que por el método POST también se puede enviar más cantidad de datos que por GET.
