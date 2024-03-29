// 1 task Objects: Задание #7 (дополнительное), Повторов: 0

const getKiller1 = (suspectInfo, deadPeople) => {

    for (let key in suspectInfo) {
        let num = 0;
        for (let value of deadPeople) {
            if (suspectInfo[key].includes(value)) {
                num++
            }
        }
        if (num === deadPeople.length) {
            return key
        }
    }
}

getKiller1(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
); // Убийца James
getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': [],
    },
    ['Ben']
); // Убийца Megan

//answer
function getKiller(suspectInfo, deadPeople) {
    let killerName = '';
    Object.entries(suspectInfo).forEach((data) => {
        const suspectPerson = data[0];
        const peopleWereSeen = data[1];

        const isKiller = deadPeople.every((deadName) => peopleWereSeen.includes(deadName))

        if (isKiller) {
            killerName = suspectPerson;
        }
    })

    return killerName
}

getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
);


// Objects: Задание #6 (дополнительное), Повторов: 0

const startGame = (heroPlayer, enemyPlayer) => {
    function getRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const heatEnemy = () => {
        heroPlayer.health -= 10
    }

    const heatHero = () => {
        enemyPlayer["health"] -= 10
    }

    let winner;

    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        if (getRandomNumberInRange(0, 1) === 0) {
            heatEnemy();
        } else {
            heatHero()
        }
    }
    if (heroPlayer.health === 0) {
        winner = enemyPlayer;
    } else {
        winner = heroPlayer
    }

    return console.log(`${winner.name} победил! У него осталось ${winner.health} здоровья`)
}

const hero = {
    name: 'Batman',
    health: 100,
}
const enemy = {
    name: 'Joker',
    health: 100,
}
startGame(hero, enemy);


// ==================================================================================================================================================
//#3 Date: Задание #2, Повторов: 0

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const nextBirthDay = nextBirthdayDate.getTime();
    const today = Date.now();
    const daysToBirthdayParty = nextBirthDay - today
    const convertMsToDays = (ms) => {
        return Math.round(ms / 1000 / 60 / 60 / 24)
    }
    return convertMsToDays(daysToBirthdayParty)
}

getDaysBeforeBirthday(new Date(2024, 8, 24))


// ==================================================================================================================================================
//#4 Classes and OOP: Задание #5, Повторов: 0

class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;

        this.technologies = [];
    }

    code() {
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Junior') {
        super(fullName, age, position);
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age, position = 'Middle') {
        super(fullName, age, position);
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age, position = 'Senior') {
        super(fullName, age, position);
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }

    code() {
        console.log(`${this.position} разработчик пишет код...`)
    }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
const middleDeveloper = new MiddleDeveloper('Игорь', 25)
const seniorDeveloper = new SeniorDeveloper('Максим', 30)
juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код…
seniorDeveloper.code(); // Senior разработчик пишет код...
console.log(juniorDeveloper.fullName, juniorDeveloper.age,
    juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age,
    middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age,
    seniorDeveloper.position); // 'Максим', 30, 'Senior'


// ==================================================================================================================================================
//#5 Classes and OOP: Задание #2, Повторов: 0

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(isPerson) {
        if (this.age >= isPerson.age) {
            console.log(`${this.name} старше, чем ${isPerson.name}`)
        } else {
            console.log(`${this.name} младше, чем ${isPerson.name}`)
        }
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);
person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим


// ==================================================================================================================================================
//#6 Objects: Задание #3, Повторов: 0
const handleObject = (obj, key, action) => {
    switch (action) {
        case "get":
            return obj[key];
        case "add":
            obj[key] = '';
            return obj;
        case "delete":
            delete obj[key];
            return obj;
        default:
            return obj
    }
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}
const result = handleObject(student, 'programmingLanguage',
    'get');
console.log('result', result);


// ==================================================================================================================================================
//#7 Classes and OOP: Задание #1, Повторов: 0

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.technologies = [];
        this.status = 'Junior';
    }

    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies
        ]
    }

    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student1 = new Student('Maxim', 20);
student1.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student1.setNewStatus('Middle');
console.log(student1);


// ==================================================================================================================================================
//#7 Асинхронность (Async Await): Задание #1, Повторов: 0
//Требуется переписать данный код, который использует then, catch и finally, в код,
// который использует исключительно async await и try, catch, finally.

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
const createNewPost = () => {
    isLoading = true;
    fetch(POSTS_URL, {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('result', result)
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(() => {
            isLoading = false;
        });
};
createNewPost();

//async await
const POSTS_URL1 = 'https://jsonplaceholder.typicode.com/posts';
let isLoading1 = false;
const newCreateNewPost = async () => {
    try {
        isLoading1 = true;
        const response = await fetch(POSTS_URL1, {
            method: 'POST',
        })
        const result = await response.json();
        console.log('result', result)
    } catch (error) {
        console.log('error', error)
    } finally {
        isLoading = false;
    }
}
newCreateNewPost();


// ==================================================================================================================================================
//#8 Objects: Задание #1, Повторов: 0

const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

const onlineUsers = users.filter(user => user.status === 'online')
console.log(onlineUsers)
console.log(`Сейчас в онлайн следующие пользователи: ${onlineUsers.map(onlineUser => onlineUser.username).join(', ')}`)


// ==================================================================================================================================================
//#9 Classes and OOP: Задание #3, Повторов: 0

class Dictionary {
    constructor(name) {
        this.name = name;

        this.words = {};
    }

    add(word, description) {
        if (!(word in this.words)) {
            this.words[word] = {
                word: word,
                description: description
            }
        }
    }

    remove(key) {
        delete this.words[key]
    }

    get(key) {
        return this.words[key]
    }

    showAllWords() {
        const values = Object.values(this.words)
        console.log(values)
        values.forEach(value => console.log(`${value.word} - ${value.description}`))
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');
dictionary.showAllWords();

// ==================================================================================================================================================
//#10 Classes and OOP: Задание #4, Повторов: 0
class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name);
    }

    add(word, description) {
        if (!(word in this.words)) {
            this.words[word] = {
                word,
                description,
                isDifficult: true,
            }
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();


// ==================================================================================================================================================
//#11 Date: Задание #1, Повторов: 0

const getDateFormat = (date, separator = '.') => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) {
        day = `0${day}`
    }
    if (month < 10) {
        month = `0${month}`
    }

    return `${day}${separator}${month}${separator}${year}`
}

getDateFormat(new Date(2000, 1, 10, 11, 55, 5, 5000))
getDateFormat(new Date());

//новое решение

const addZero = (item) => String(item).length === 1 ? `0${item}` : String(item);

const getDateFormat1 = (date, separator = '.') => {
    let day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();

    const dayArr = [day, month + 1, year].map(item => addZero(item));
    return dayArr.join(separator);
}
getDateFormat1(new Date());


// ==================================================================================================================================================
//Асинхронность (Async Await): Задание #2, Повторов: 0

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((data) => data.json());
            return Promise.all(dataResults)
        })
        .then((allTasks) => {
            console.log(allTasks);
        })
        .catch((error) => {
            console.log(error);
        })
}
getTodosByIds([43, 21, 55, 100, 10]);

const TODOS_URL1 = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds1 = async (ids) => {
    try {
        const requests = ids.map((id) => fetch(`${TODOS_URL1}/${id}`));
        const responses = await Promise.all(requests);
        const todos = await Promise.all(responses.map((data) => data.json()));
        console.log(todos);
    } catch (error) {
        console.log(error);
    }

}
getTodosByIds1([43, 21, 55, 100, 10]);


// ==================================================================================================================================================
// Асинхронность (Async Await): Задание #1, Повторов: 0

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
let isLoading = false;
const createNewPost = () => {
    isLoading = true;
    fetch(POSTS_URL, {
        method: 'POST',
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('result', result)
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(() => {
            isLoading = false;
        });
};
createNewPost()


const POSTS_URL1 = 'https://jsonplaceholder.typicode.com/posts';
let isLoading1 = false;

const createNewPost1 = async () => {
    try {
        isLoading = true;
        const response = await fetch(POSTS_URL1);
        if (!response.ok) {
            throw new Error('Ну ептыть!')
        }
        const posts = await response.json();
        console.log(posts)
    } catch (error) {
        console.log('error', error)
    } finally {
        isLoading = false;
    }
    ;
};
createNewPost1();

// ==================================================================================================================================================
// Асинхронность (Async Await): Задание #2, Повторов: 1

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((data) => data.json());
            return Promise.all(dataResults)
        })
        .then((allTasks) => {
            console.log(allTasks);
        })
        .catch((error) => {
            console.log(error);
        })
}
getTodosByIds([43, 21, 55, 100, 10]);


const TODOS_URL2 = 'https://jsonplaceholder.typicode.com/todos';

const getTodosByIds2 = async (ids) => {
    try {
        const requests = ids.map((id) => fetch(`${TODOS_URL2}/${id}`));
        const responses = await Promise.all(requests);
        responses.forEach(response => {
            if (!response.ok) {
                throw new Error('Ну ептыть')
            }
        })
        const todos = responses.map(response => response.json());
        const results = await Promise.all(todos);
        console.log(results)
    } catch (error) {
        console.log('error', error)
    }

}
getTodosByIds2([43, 21, 55, 100, 10]);


// ==================================================================================================================================================
// Objects: Задание #1, Повторов: 1

const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

const onlineUsers = users.filter(user => user.status === 'online');
const usersOnlineNames = onlineUsers.map(onlineUsers => onlineUsers.username)

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames.join(', ')}`)

console.log(onlineUsers);

// ==================================================================================================================================================
// Objects: Задание #2, Повторов: 1

const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
];

console.log(people.filter(man => man.id === 3))

const giveTalonsInOrder = (patients, orders) => {
    return orders.map((order) => patients.filter(man => man.id === order)[0])
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);


// ==================================================================================================================================================
// Objects: Задание #3, Повторов: 1

const secondHandleObject = (obj, key, action) => {
    switch (action) {
        case "get":
            return obj[key];
        case "add":
            obj[key] = '';
            return obj
        case 'delete':
            delete obj[key];
            return obj;
        default:
            return obj;
    }
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}
const result = secondHandleObject(student, 'programmingLanguage',
    'delete');
console.log('result', result);


// ==================================================================================================================================================
// Objects: Задание #4, Повторов: 0

const giveJobToStudent = (student, jobName) => {
    console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);

    student["job"] = jobName;

    console.log(student)
    return student
}

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}
const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

// ==================================================================================================================================================
// Objects: Задание #5, Повторов: 0

const groceries = {
    "Orange Juice": {
        price: 1.5,
        discount: 10,
    },
    "Chocolate": {
        price: 2,
        discount: 0,
    },
// more items...
}
const getTotalPriceOfShoppingBag = (shoppingBag) => {
    return shoppingBag.reduce((sum, current) => {
        const currentProductPrice = current.quantity * groceries[current.product].price;
        const currentProductPriceWithDiscount =
            currentProductPrice - (currentProductPrice * groceries[current.product].discount / 100);
        return sum + currentProductPriceWithDiscount
    }, 0)
}

const shoppingBag = [
    {product: 'Chocolate', quantity: 3},
    {product: 'Orange Juice', quantity: 23},
]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice);

// ==================================================================================================================================================
// Objects: Задание #6, Повторов: 1
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = (heroPlayer, enemyPlayer) => {
    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        const randomNumber = getRandomNumberInRange(0, 1);
        console.log(randomNumber)

        if (randomNumber === 0) {
            heroPlayer.heatEnemy();
        } else {
            enemyPlayer.heatHero();
        }
    }

    const winnerName = heroPlayer.health > 0 ? heroPlayer.name : enemyPlayer.name;
    const winnerHealth = heroPlayer.health > 0 ? heroPlayer.health : enemyPlayer.health;

    return console.log(`${winnerName} победил! У него осталось ${winnerHealth} здоровья`)
}

const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy() {
        enemy.health -= 10;
    }
}
const enemy = {
    name: 'Joker',
    health: 100,
    heatHero() {
        hero.health -= 10;
    }
}
startGame(hero, enemy);


// ==================================================================================================================================================
// Objects: Задание #7, Повторов: 1

const getKiller = (suspectInfo, deadPeople) => {
    const suspectArr = Object.values(suspectInfo);
    console.log(suspectArr);

    const killerIndex = suspectArr.findIndex(miniSuspectArr => deadPeople.every(deadMan => miniSuspectArr.includes(deadMan)));

    const suspectNames = Object.keys(suspectInfo);

    const killer = suspectNames[killerIndex]

    console.log(killer)
}

getKiller(
    {
        'James': ['Jacob', 'Bill', 'Lucas'],
        'Johnny': ['David', 'Kyle', 'Lucas'],
        'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
);

getKiller(
    {
        'Brad': [],
        'Megan': ['Ben', 'Kevin'],
        'Finn': [],
    },
    ['Ben']
);

// ==================================================================================================================================================
// Objects: Задание #8, Повторов: 0
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const getWinner = (applicants, winnerObject) => {
    const applicantsArr = Object.keys(applicants);

    const winnerNumber = applicantsArr[getRandomNumberInRange(0, applicantsArr.length - 1)];
    const winnerPerson = applicants[winnerNumber];

    return {
        ...winnerObject,
        ...winnerPerson
    }
}

const todaysWinner = {
    prize: '10 000$',
}
const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);


// ==================================================================================================================================================
// Date: Задание #1, Повторов: 1

const addZero = (number) => number.toString().length === 1 ? `0${number}` : number.toString()
const getDateFormat = (date, separator) => {
    const day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateArray = [day, month, year].map(item => addZero(item))

    return dateArray.join(separator)
}

const today = new Date()

console.log(getDateFormat(today, '-'))


// ==================================================================================================================================================
// Date: Задание #2, Повторов: 1

const convertMsToDays = (ms) => {
    return ms / 1000 / 60 / 60 / 24
}

const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const today = new Date()

    return Math.round(convertMsToDays(nextBirthdayDate - today))
}
const myBirthDay = new Date(2023, 11, 11)
getDaysBeforeBirthday(myBirthDay)


// ==================================================================================================================================================
// Date: Задание #3, Повторов: 0

const addDays = (date, days = 1) => {
    const dateMs = date.getTime();
    const daysMs = days * 24 * 60 * 60 * 1000

    return new Date(dateMs + daysMs)
}

const todaye = new Date()


const newDate = addDays(todaye, 3)

console.log(newDate)


// ==================================================================================================================================================
// Date: Задание #4, Повторов: 0

const allowVisa = (arr) => {
    return arr.filter(item => {
        const date = item.passportExpiration.split('.')
        const day = date[0];
        const month = date[1] - 1;
        const year = date[2];
        console.log(new Date(year, month, day).getTime());
        console.log(new Date(Date.now()))
        return new Date(year, month, day).getTime() > new Date(Date.now()) && !item.criminalRecord
    })
}

const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: false,
        passportExpiration: '19.06.2023',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2021',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2022',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2021',
    },
];
const result = allowVisa(peopleWithVisa);
console.log('result', result);


// ==================================================================================================================================================
// Ключевое слово this: Задание #1, Повторов: 0

const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level++;
        if (this.level === 2) {
            this.stack.push('CSS')
        }
        if (this.level === 3) {
            this.stack.push('JavaScript')
        }
        if (this.level === 4) {
            this.stack.push('React')
        }
        if (this.level === 3) {
            this.stack.push('JavaScript')
        }
        if (this.level > 5) {
            console.log('Студент выучил все технологии!')
        }
        return this
    }
}

student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
console.log(student.stack)


// ==================================================================================================================================================
// Ключевое слово this: Задание #2, Повторов: 0

const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

const makeDomestic = function (isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    this.isDomestic = isDomestic;
    return this
}


makeDomestic.bind(dog, true)();

makeDomestic.call(bird, false);

makeDomestic.apply(bird, [false])


// ==================================================================================================================================================
// Ключевое слово this: Задание #3, Повторов: 0

const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack() {
        console.log(`${this.fullName} сейчас с мячом и начинает
атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        console.log(`${this.fullName} уходит на замену.
На поле выходит ${newPlayer}`);
    }
};
const attack = footballer.attack.bind(footballer)();
const score = footballer.scoreGoal.call(footballer, 'СИИИИИИИИИИИИИ');
const substitute = footballer.goToSubstitution.apply(footballer, ['Paulo Dibala']);


// ==================================================================================================================================================
// Ключевое слово this: Задание #4, Повторов: 0

const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,

    checkChancesToWin(defenderObject) {
        let chances = 0;

        const defenderArmy = Object.values(defenderObject);
        const attackerArmy = Object.values(this)

        defenderArmy.forEach((value,index) => {
            if (value < attackerArmy[index] && typeof attackerArmy[index] === 'number') {
                chances++
            }
        })

        let arr = [];
        arr.push(chances);
        arr.push(Object.keys(defenderObject).length);
        console.log(arr)
        return arr
    },

    improveArmy() {
        const attackerArmy = Object.entries(this);
        attackerArmy.forEach(item => {
            const key = item[0];
            const values = item[1];

            if (typeof values === 'number') {
                this[key] = values + 5
            }
        })
    },

    attack(defenderObject) {
        let checkChances = this.checkChancesToWin(defenderObject)[0] / this.checkChancesToWin(defenderObject)[1] * 100;
        console.log(checkChances)
        if (checkChances < 70) {
            this.improveArmy();
            console.log(attacker)
            console.log(`Наши шансы равны ${checkChances}%. Необходимо укрепление!`)
        } else {
            console.log(` “Мы усилились! Мы несомненно победим! Наши шансы высоки!”`)
        }
    }
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}


attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки


// ==================================================================================================================================================
//  Classes and OOP: Задание #1, Повторов: 1

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.technologies = [];
    this.status = 'Junior';
    this.setTechnologies = function(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ];
    }
    this.setNewStatus = function(newStatus) {
        this.status = newStatus;
    }
}
// const student = new Student ('Maxim', 20);
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
// student.setNewStatus('Middle');
// console.log(student);

class Student1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.technologies = [];
        this.status = 'Junior';
    }
    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ]
    }
    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student = new Student1 ('Maxim', 20);
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
student.setNewStatus('Middle');
console.log(student);


// ==================================================================================================================================================
//  Classes and OOP: Задание #2, Повторов: 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    compareAge(person) {
       if (person.age > this.age) {
           console.log(`${person.name} старше, чем ${this.name}`)
       } else {
           console.log(`${person.name} младше, чем ${this.name}`)
       }
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);


person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1);























































