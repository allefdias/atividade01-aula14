// script.js

async function fetchUserData() {
    const username = document.getElementById('user').value;
    const userInfoDiv = document.getElementById('user-info');

    if (!username) {
        userInfoDiv.innerHTML = '<p>Please enter a GitHub username.</p>';
        return;
    }

    userInfoDiv.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const data = await response.json();
        
        const userHTML = `
            <img src="${data.avatar_url}" alt="${data.login}">
            <h2>${data.name || data.login}</h2>
            <p>${data.bio || 'No bio available'}</p>
        `;

        userInfoDiv.innerHTML = userHTML;
    } catch (error) {
        userInfoDiv.innerHTML = `<p>${error.message}</p>`;
    }
}
