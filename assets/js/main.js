const Form = document.getElementById('searchForm');
const searchInp = document.getElementById('searchInp');
const myDiv = document.getElementById('myDiv');
const btn = document.getElementById('btn');
const API = ('https://api.github.com/users/')


Form.addEventListener('submit', (e) => {
    e.preventDefault(),
        searchUser()
})
searchUser = () => {
    fetch(API + searchInp.value)
        .then(res => res.json())
        .then((data) => {
            renderUser(data)
        });
};


renderUser = (data) => {
    myDiv.innerHTML = "";
    const h2 = document.createElement('h2');

    h2.textContent = data.login;
    const userImage = document.createElement('img');
    userImage.src = data.avatar_url;

    const followers = document.createElement('p')
    followers.textContent = `Followers:${data.followers}`

    const following = document.createElement('p')
    following.textContent = `Followings:${data.following}`
    myDiv.append(h2, userImage,followers,following)

};
