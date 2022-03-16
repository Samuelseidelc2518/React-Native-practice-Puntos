# How to use google maps and MapView(react-native-maps) component

Luego de seguir los pasos del video no es suficiente para que esto funcione en una build ya que necesitas una api key de google para poder usar los mapas de google en la app

Pasos para generar la api de google y conectarla a la app

- Paso 1: Registrar un projecto en la nube de google y habilitar Maps SDK for Android

  - Entrar a google cloud y crear un proyecto nuevo
  - Una vez creado buscar Maps SDK for Android y habilitar

- Paso 2: Sacar el SHA-1 certificate fingerprint de la app

  - abre una consola en el directorio del proyecto y ejecuta expo fetch:android:hashes (Nota: debes tener instalado algun sdk de android de java porque hay que usar un programa llamado keytools que debe estar agregado al path) y copia el codigo que esta seguido de `Google Certificate Hash (SHA-1)`

- Paso 3: Crear la apiKey

  - En la pagina de google cloud ve a crear credenciales
  - luego selecciona Clave de api
  - En las casillas de restricciones selecciona restringir para solo usar en android
  - Luego selecciona en agregar un elemento
  - Coloca el nombre del paquete que lo consigues en app.json expo.android.package y el anteriormente guardado `Google Certificate Hash (SHA-1)`
  - Click en terminar y luego en guardar

- Paso 4: añadir la clave de api a tu proyecto
  - Copia la api key en el archivo app.json en expo.android.config.googleMaps.apiKey
  - Crea el build de la app como normalmente con expo