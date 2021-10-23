const socialMediaUserLink = {
    github: "wendelcutrim",
    youtube: "wendeldim",
    facebook: "wendelcutrim",
    instagram: "wendeldim",
    twitter: "wendelcutrim",
}; 

let userName = 'Wendel Cutrim';

const createUserName = (name) => {
    document.getElementById('cardUserName').textContent = name;
};

createUserName(userName);

function changeSocialMediaLink() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${socialMediaUserLink[social]}`
    }
};

changeSocialMediaLink();