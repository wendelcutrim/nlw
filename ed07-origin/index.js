const socialMediaUserLink = {
    github: "wendelcutrim",
    youtube: "wendeldim",
    facebook: "wendelcutrim",
    instagram: "wendeldim",
    linkedin: "in/wendel-cutrim-766643174",
};

/* let userName = 'Wendel Cutrim';

const createUserName = (name) => {
    document.getElementById('cardUserName').textContent = name;
};

createUserName(userName); */

const changeSocialMediaLink = () => {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${socialMediaUserLink[social]}`
    }
};

changeSocialMediaLink();

const getGitHubProfileInfos = () => {
    const url = `https://api.github.com/users/${socialMediaUserLink.github}`

    /* O fetch serve para acessar a URL e retornar o que ela responder, mas ele não responde em JSON*/

    fetch(url)
        .then(response => response.json())
        .then(data => {
            cardUserName.textContent = data.name;
            userBio.textContent = data.bio;
            userLink.href = data.html_url;
            userAvatar.src = data.avatar_url;
            userLogin.textContent = data.login
        })

};

getGitHubProfileInfos();