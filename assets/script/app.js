/*En este programa se consulta una API, se le pasa un nombre de usuario para que devuelva información del usuario que se le solicita y se muestra en pantalla su nombre, link de blog y ubicación (name, blog, location).
*/

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se agrega . porque es una clase
const $b = document.querySelector('.blog'); //se cambia de # a .
const $l = document.querySelector('.location');

//se colocó async antes de la function, ya que await no se puede utilizar en funciones regulares porque habría un error de sintáxis
async function displayUser(username) {
  //se agrega try y catch
  try{ $n.textContent = 'cargando...';
  //se manda a llamar 
  const response = await fetch(`${usersEndpoint}/${username}`);
  //se agregó const data
  const data = await response.json(); 
  console.log(data);
  //tenía comillas simples cuando debe llevar backticks
  $n.textContent = `${data.name}`; 
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  } catch (err)  {
    handleError(err);
  } 
}

function handleError(err){
      console.log('OH NO!');
      console.log(err);
      $n.textContent =`Algo salió mal: ${err}`; //se agregó signo $ a n
    }


displayUser('stolinski').catch(handleError);
