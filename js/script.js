console.log('OK js!')

/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const app = new Vue(
    {
        el: '#root',
        data: {
            testo: 'Pefforza, deh',

            image: 'img/momento-gaming.jpg'
        }
    }
);