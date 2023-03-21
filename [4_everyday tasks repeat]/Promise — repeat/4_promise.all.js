// ==================================================================================================================================================
//# Асинхронность (Promise + Fetch): Задание #1, Повторов: 1

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const dataContainer = document.querySelector('#data-container');
const createListItem = (userName) => {
    return `
    <li><a href="#">${userName}</a></li>
    `
}

const createToggleLoader = () => {
   const loader = dataContainer.querySelector('#loader');
   const isHidden = loader.hasAttribute('hidden');
   if (isHidden) {
       loader.removeAttribute('hidden');
   } else {
       loader.setAttribute('hidden', '')
   }
}

// const getAllUsers = () => {
//     createToggleLoader();
//     fetch(USERS_URL, {
//         method: 'GET',
//         headers: {},
//     })
//         .then(response => {
//             if(response.ok) {
//                 return response.json()
//             } else {
//                 throw new Error ('Ну ептыть')
//             }
//
//         })
//         .then(results => {
//             results.forEach(result => {
//                 const template = document.createElement('template');
//                 template.innerHTML = createListItem(result.name);
//                 dataContainer.append(template.content);
//             })
//         })
//         .catch(error => console.log('error', error))
//         .finally(() => createToggleLoader());
// }
//
// getAllUsers();


// ==================================================================================================================================================
//# Асинхронность (Promise + Fetch): Задание #2, Повторов: 1

// const getUsersByIds = (ids) => {
//     const requests = ids.map(id => fetch(`${USERS_URL}/${id}`))
//     Promise.all(requests)
//         .then(responses => {
//             console.log(responses);
//             const users = responses.map(response => {
//                 if (response.ok) {
//                    return response.json()
//                 } else {
//                     throw new Error('Ну еапт')
//                 }
//             })
//             return Promise.all(users);
//         })
//         .then(users => {
//             console.log(users)
//             users.forEach(user => {
//                 const template = document.createElement('template');
//                 template.innerHTML = createListItem(user.name);
//                 dataContainer.append(template.content);
//             })
//         })
//         .catch(error => console.log('error', error))
// }
//
// getUsersByIds([5, 6, 2, 1])


// ==================================================================================================================================================
//# Асинхронность (Promise + Fetch): Задание #3, Повторов: 0

// const PHOTO_ID = ('https://jsonplaceholder.typicode.com/photos/')
//
// const createPhotoItem = (imageUrl, imageTitle) => {
//     //  В след. Раз надо обезопасить!
//     return `
//     <li class="photo-item">
//         <img class="photo-item__image"
//         src="${imageUrl}">
//         <h3 class="photo-item__title">
//             ${imageTitle}
//         </h3>
//     </li>
//     `
// }
// const getFastestLoadedPhoto = (ids) => {
//     const requests = ids.map(id => fetch(`${PHOTO_ID}/${id}`))
//     Promise.race(requests)
//         .then((response) => {
//            if(response.ok) {
//              return  response.json()
//            } else {
//                throw new Error('Ну ептыть')
//            }
//         })
//         .then((result) => {
//             const template = document.createElement('template');
//             template.innerHTML = createPhotoItem(result.url, result.title);
//             dataContainer.append(template.content)
//         })
//         .catch(error => console.log(error))
// }
//
//
// getFastestLoadedPhoto([60, 12, 55])


// ==================================================================================================================================================
//# Асинхронность (Promise + Fetch): Задание #4 (дополнительное), Повторов: 0

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments?postId='

const createPost = (postTitle, postText) => {
    return `
        <div id="post" class="post">
            <h1 class="post__title">${postTitle}</h1>
            <p class="post__text">${postText}</p>
            <b class="post__comments-text">Комментарии</b>
            
        </div>
    `
}
const createPostComments = (postCommentAuthor, postCommentText) => {
    return `
        <div class="post__comments">
            <div class="post-comment">
                <span class="post-comment__author">
                    ${postCommentAuthor}
                </span>
                <span class="post-comment__text">
                    ${postCommentText}
                </span>
            </div>
        </div>
    `
}
const renderPost = (postId) => {
    const postData = fetch(`${POST_URL}/${postId}`);

    postData
        .then(response => response.json())
        .then(post => {
            console.log(post)
            const mainTemplate = document.createElement('template');
            mainTemplate.innerHTML = createPost(post.title, post.body);
            dataContainer.append(mainTemplate.content)

            const comments = fetch(`${COMMENTS_URL}${postId}`)
            comments
                .then(responses => responses.json())
                .then(comments => {
                    comments.forEach(comment => {
                        const template = document.createElement('template');
                        template.innerHTML = createPostComments(comment.email, comment.body);
                        const post = document.querySelector('.post')
                        post.append(template.content)
                    })
                })
        })
}

renderPost(1)














