Express server ready to execute and serve public folder in the web.

## Setup
- Clone repo
- npm install in root folder
- npm run dev to run project in port 3000

## Methods
- .on: Método para escuchar cambios.
- .emit: Método para emitir cambios. Comunmente se utiliza para enviar objetos, no strings solos o valores booleanos.
- .broadcast.emit: Método para emitir un cambio/mensaje/etc a todos los clientes activos.

## Libraries
1. [Nodemon](https://yarnpkg.com/en/package/nodemon)
2. [Express](https://yarnpkg.com/en/package/express)
3. [Socket.io](https://www.npmjs.com/package/socket.io)