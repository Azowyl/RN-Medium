# RN-Medium

## Workshop Introduccion a React Native

### Setup
- Instalar un emulador a traves de [android studio](https://developer.android.com/studio) o usar el cel
- Clonar repo
- Instalar dependencias: `npm install`
- Instalar app en el emulador: `npm run android'
- Iniciar bundler: `npm start`

### Links
- Setup proyecto react native: https://reactnative.dev/docs/environment-setup
- Setup react navigation: https://reactnavigation.org/docs/getting-started
- IMPORTANTE!: cuando se instala una libreria nueva, si tiene codigo nativo (android/ios) hay que volver a buildear la app (`npm run android`)
- [Super mega repo](https://github.com/jondot/awesome-react-native) con cosas muy utiles

## Challenge
- Crear la pantalla del detalle del articulo: `src/Article/ArticleDetails`
- Tips
  - Para crear la barra de abajo conviene usar `position: absolute` esto la deja fija y arriba del resto del contenido
  - Para los iconos pueden usar [react-native-elements](https://reactnativeelements.com/)
  - El header de la navegacion es editable -> https://reactnavigation.org/docs/headers/
