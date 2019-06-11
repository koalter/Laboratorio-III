ejecutar 'npm install -g typescript' al inicio.

Para empezar a transpilar:
    'tsc [nombre-del-archivo-ts]'
Eso deberia generar un archivo js llamado igual que el ts.

Podemos ejecutar el codigo js corriendo node. Ej:
    'node app'

El transpilador podra transpilar todos los archivos que le pasemos separados por un espacio,
y tambien podemos hacer que transpile todos los archivos presentes llamando al comando
'tsc *.ts' (no funciona con cmd)

Parametros para tsc:
-> -w (--watch, observa los archivos transpilados y actualiza los js a medida que hacemos cambios)
-> --outFile [archivo].js (mergea los archivos nombrados en un archivo unico)

Crear un archivo de configuracion para ts:
    'tsc --init'