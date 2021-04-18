//URL para obtener datos
let url = 'https://jsonplaceholder.typicode.com/photos/1';
let posts_div = document.getElementById('posts');

let div_elem = document.createElement('div');
div_elem.className = 'posts';
let thumbnailUrl = document.createElement('img');
let title = document.createElement('h6');

//Setear los datos
const setData = (img_src, title_post) => {
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
            console.log(json);
            // console.log(json.thumbnailUrl, json.title);
            setData(json.thumbnailUrl, json.title);
            appendData(thumbnailUrl, title);
        });
};

//Llamada funciones
getData();