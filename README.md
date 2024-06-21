# Servicios digitales para clases offline 

## Resumen

Este repositorio cuenta con conjunto de servicios en containers para desplegar en clase y que los alumnos puedan consumir desde celulares, computadoras y tablets sin internet.

Para poder desplegar esta alternativa debe contarse con un modem wifi y una computadora que funcione como servidor.

Los servicios desplegados son
1. **DNS**: mediante dnsmasq para redireccionar todo el tráfico a la computadora servidor.
2. **NGINX**: para poder desplegar páginas estáticas.
3. **MOODLE**: donde se puede contener todo el curso con actividades evaluativas.

## DNS

La configuración del dns se encuentra en el archivo *./dnsmasq.conf*. En este momento está dispuesto para que cualquier dirección lleve hacia 192.168.1.100 (dirección dentro de la intranet del router donde está la computadora que usaré como servidor). La línea específica de configuracion es:
```
address=/#/192.168.1.100
```

## NGNIX

El nginx esta configurado escuchar el puerto 80 de la computadora. 
Las páginas y archivos que se quieran servir se deben colocar en *./html/*

## MOODLE

todavía no está implementado.
