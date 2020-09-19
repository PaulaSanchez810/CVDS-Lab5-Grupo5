# CVDS-Lab5-Grupo5



# Parte 1 - Jugando a ser un cliente HTTP
## Instalación de TelnetClient en Windows

.![error](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/MicrosoftTeams-image.png)

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

.![panel de control](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/get%20html.png)


## WC -C/HTML
- El comando Wc solo es para linux, por ende no deja ejcutarlo en cmd, ocasionando que tengamos que contar las palabras en el word.


.![WC -C/HTML](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/MicrosoftTeams-image%20(5).png)



## ¿Cuál es la diferencia entre los verbos GET y POST? 

Tanto el metodo **GET** como **POST** son protocolos HTTP el cual se encargan de enviar al servidor como peticiones(request) y este recibe una respuesta a dicha solicititud (responde).

**GET**: Se encarga de obtener informacion del servidor, trae los datos que estan almacenados en el servidor, ya sea una base de datos o un archivo al cliente. Esto deriva independientemente de que tengamos que enviar(request) algun datos sera procesado, para luego devolver una respuesta(response.

**POST** : Este en cambio se encarga de enviar información desde el cliente para que este pueda ser procesada por y puede ser actualizadaa o agregada informacion en el servidor, como podria ser la carga o actualizacion en si de un articulo. Cuando se envia(request) datos a través de un formulario, estos son procesados y leugo a traves de una redireccion, se devuelve un (response) alguna página con información.

Tanto **GET** como **POST** solicitan una respuesta al servidor. Enviar datos en una **URL** y actualizar o insertar dicha informacion, este podria ser un metodo **POST** Y seria un llamado **GET**. Por tango se puede concluir que las llamadas por metodo **GET** pueden ser cacheadas( historial de navegador), indexadas por un navegador. El metodo **POST** no puede realalizar dicha tarea. 

Generalmente usamos links para ejecutar llamadas GET ya que la idea del link es simplemente “solicitar” una información (pagina) al servidor y que sea devuelta como una respuesta. Mientras usamos formularios para actualizar datos, como artículos, usuarios, etc. también en cuenta que por el método POST también se puede enviar más cantidad de datos que por GET.


## ¿Qué otros tipos de peticiones existen?

**HEAD** : El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.

**POST** : El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

**GET** : El método GET  solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

**PUT** : El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

**DELETE**: El método DELETE borra un recurso en específico.

**CONNECT**: El método CONNECT establece un túnel hacia el servidor identificado por el recurso.

**OPTIONS**: El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

**TRACE** : El método TRACE  realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.

**PATCH**: El método PATCH  es utilizado para aplicar modificaciones parciales a un recurso.

## CURL

- Curl www.httpbin.org

.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl/parte1.png)


.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl/parte2.png)


.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl/Parte%203.png)


.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl/parte%204.png)


.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl/parte%205.png)


.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl/parte%206.png)





- Curl -v www.httpbin.org

.![nombre parte1](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl%20-v/parte%201.png)



.![nombre parte2](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl%20-v/parte%202.png)



.![nombre parte 3](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl%20-v/parte%203.png)



.![nombre parte 4](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl%20-v/parte%204.png)



- Curl- i www.httpbin.org

.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl%20-i/parte1.png)


.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl%20-i/parte2.png)


.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl%20-i/parte3.png)



.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/curl%20-i/parte4.png)

## ¿Cuáles son las diferencias con los diferentes parámetros?
- -v verbose Make the Operation more talkative.
- -i include protocol response headers in the output. 

# Parte II. - Haciendo una aplicación Web dinámica a bajo nivel.

**2.** En el pom.xmL, agregue la siguiente dependencia:

.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/parte%202%2C%20item%202.jpg)

**4.** Ejecucion del servidor embebido Tomcat.

**5.** Peticiones "SampleServiet"

.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/parte%202%2C%20item%205.png)

**6.** Peticiones GET, con parametro "name"

**7.** Artefacto gson

**8.** cambios al final del path de la url.

**9.** Cree la clase edu.eci.cvds.servlet.model.Todo, con metodos getter y setter.

**11.** Creacion clase HttpServlet

**12.** Metodos de antoación @WebServlet, definiendo la propiedad urlPatterns. 


**13.** Implementacion del metodo.

**14.** Recopilacion y ejecucion de la aplicacion. 

**15.** Diferentes consultas desde el navegador


# Parte III.

**16.** Implementacion del doGet.

**18.** Creacion de formulario con campo para el numero

**19.** Validación del valor ingresado es numerico

**20.** Recopilacion y ejecucion de la aplicación.

  - Qué diferencia observa?
  
  Se puede evidenciar que la forma en la que se envia la información cambia. Esto se debe a que esta haciendo uso del metodo GET,   el cual se podran evidenciar los parametros utilizados (mediante URL). Ocasionando que con el metodo POST estos parametros van     ocultos al usuario.
  
  

**21.**  Revisión de la clase **service.java**

  - ¿Qué se está viendo?
  
    Se ve las peticiones y las solicitudes del servidor jsonplaceholder. Encargandose de mandarle el parametro de id solicitado,      abriendo la conexión realizada y luego la cierra. Además se encarga de realizar la conexion de los datos obtenidos y los coloca   en columnas y para finalizar los pone en un tabla.
    

# Parte IV. - Frameworks Web MVC – Java Server Faces / Prime Faces

**1.** Agregación de las dependencias mas recientes y Primefaces

**2.** Despliege de aplicación, archivo web.html

**4.** Creacion de Backing-Bean, con propiedades especificas.


**5.** Creacion de página XHTML, calculadora.xtml

  - ¿Qué espacios de nombres XML requiere una página de PrimeFaces?
  
  **THEME** : Es el tema de la aplicación.
  
  **mobile.THEME** : Es el tema de la aplicacion de mobile.
  
  **PUSH_SERVER_URL**: Es el servidor de configuracion del urlpara el push de PrimesFaces.
  
  **SUBMIT **: Define el modo de carga de ajax, completo o en particiones.
  
  **DIR** : Este se encarga de definir la orientacion, ltr o rtl.
  
  **RESET_VALUES**: Cuando esta habilitada, e lajax se actualiza en las entradas y se reinicia.
  
  **Secret** :  Teclas secretas encriptadas en expresiones de valores expuestas contenidos de comparticion.
  
  **TRANSFORM_METADATA** : Esta se encarga de de transformar y validar el metadata a los atrivutos httml.
 
  
  -  ¿Cuál es la estructura básica de la misma?
  
    La estructura basica se puede evidenciar en la siguiente imagen: 
    
.![nombre cualquiera](https://github.com/PaulaSanchez810/CVDS-Lab5-Grupo5/blob/master/Imagenes/partes.jpg)
    
    
    
    
  
    
