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
// 6 заданий по DOM