// 1 task Objects: Задание #7 (дополнительное), Повторов: 0

const getKiller = (suspectInfo, deadPeople) => {

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

getKiller(
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

        if(isKiller) {
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

    let winner = ''

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
      return  Math.round(ms / 1000 / 60 / 60 / 24) 
    }
    return convertMsToDays(daysToBirthdayParty)
}

getDaysBeforeBirthday(new Date(2024, 08, 24))



// ==================================================================================================================================================
//#4 Classes and OOP: Задание #5, Повторов: 0

class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;

        this.technologies = [];
    }

    code() {}

    learnNewTechnology(technology) {
        this.technologies.push(technology)
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

    compareAge(isperson) {
        if(this.age >= isperson.age) {
            console.log(`${this.name} старше, чем ${isperson.name}`)
        } else {
            console.log(`${this.name} младше, чем ${isperson.name}`)
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

const student1 = new Student ('Maxim', 20);
student1.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
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
const newCreateNewPost = async() => {
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
//#12 Асинхронность (Promise + Fetch): Задание #2, Повторов: 0
// Начать завтра с этого задания
