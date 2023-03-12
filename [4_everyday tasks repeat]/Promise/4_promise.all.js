

const USERS = 'https://jsonplaceholder.typicode.com/users';

const dataContainer = document.querySelector('#data-container');

const createUsersElement = (text) => {
    const listItem = document.createElement('li');
    const anchorItem = document.createElement('a');

    anchorItem.textContent = text;
    anchorItem.href = '#';

    listItem.append(anchorItem);
    return listItem
}

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');

    if (isHidden) {
        loader.removeAttribute('hidden')
    } else {
        loader.setAttribute('hidden', '')
    }
}

const getAllUsers = () => {
    toggleLoader();
    const result = fetch(USERS, {
        method: 'GET'
    })

    console.log(result)

    result
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('ну ептыть')
            }
            return response.json()
        })
        .then(users => {
            users.forEach(user => {
              const userHTML = createUsersElement(user.username);
              dataContainer.append(userHTML)
            })
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(() => {
            toggleLoader();
        })

}

getAllUsers();