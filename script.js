let profileImage = document.getElementById('image');
let realName = document.getElementById("name");
let userName = document.getElementById('user-name');
let bio = document.getElementById('bio')


const requestUrl = "https://api.github.com/users/bruhDanish";
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    
    if (xhr.readyState === 4) {
        const response = JSON.parse(this.responseText);
        console.log(response.followers);
        
        profileImage.innerHTML = `<image src = ${response.avatar_url} />`;
        realName.innerHTML = `<p>${response.name}</p>`;
        userName.innerHTML = `<p>${response.login}</p>`;
        bio.innerHTML = `<p>${response.bio}</p>`;
    }
}

xhr.send();
