# CVDS-Lab5-Grupo5
## Revise el resultado obtenido. ¿Qué codigo de error sale?, revise el significado del mismo en la lista de códigos de estado HTTP.

400 Bad Request: Este error se debe a que no puede procesar la solicitud debido a que hay un error de usuario como puede ser (Sintaxis, una solicitud mal formada, tamaño demasiado grande, enrutamiento de solicitud engañoso) entre otros. 

Qué otros códigos de error existen?, ¿En qué caso se manejarán?

o402 Payment Required: Este código de error es usado cuando la forma de pago digital es necesaria, para completar la transacción. Esto incluye la necesidad de autenticación de credenciales y objetivos de recursos.


403 Forbidden: Este tipo de error sucede cuando los datos son válidos, pero el servidor rechaza la acción, debido a que el usuario no tiene permisos necesarios para completar la acción. 
o	404 Not Found: Este tipo de error nos indica que el recurso solicitado no ha sido encontrado, pero puede estar disponible en el futuro.


407 Proxy Authentication Required: Este error indica que el cliente primero de autenticarse con el proxy y ahí si realizar la respectiva acción. 

409 Conflict: Este tipo de error nos indica que no se puede procesar la solicitud debido a la generación de conflicto por parte del estado actual del recurso.


410 Gone: Indica que el recurso solicitado ya no esta disponible y no volverá a estar disponible. Esto se debe al que el curso ha sido eliminado intencionalmente y por tanto el recurso debe purgarse.


413 Payload Too Large: La solicitud es mayor que el servidor que desea procesar y por tanto la entidad es demasiado grande. 

414 URI Too Long: EL URI proporcionado (identificador uniforme de recursos) es demasiado largo para que el servidor lo pueda procesar, esto puede ser debido a largas longitudes de cadenas de datos. 


