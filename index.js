//URL para obtener datos
let url = 'https://jsonplaceholder.typicode.com/users/1/photos';
let posts_div = document.getElementById('posts');

let div_elem;
let thumbnailUrl;
let title;

//Setear los datos
const setData = (img_src, title_post) => {
    div_elem = document.createElement('div');
    div_elem.className = 'posts';
    thumbnailUrl = document.createElement('img');
    title = document.createElement('h6');
    thumbnailUrl.src = img_src;
    title.innerText = title_post;
};

//Append posts_div
const appendData = (thumbnailUrl, title) => {
    div_elem.appendChild(thumbnailUrl);
    div_elem.appendChild(title);
    posts_div.appendChild(div_elem);
};

//Obtener datos
const getData = async () => {
    await fetch(url)
        .then(response => response.json())
        .then(json => {
            // console.log('Cantidad de datos obtenidos', json.length);
            let index = 0;
            for (const post of json) {
                if (index < 6) {
                    console.log(index);
                    setData(post.thumbnailUrl, post.title);
                    appendData(thumbnailUrl, title);
                    index++;
                };
            };
        });
};

//Llamada funciones
getData();