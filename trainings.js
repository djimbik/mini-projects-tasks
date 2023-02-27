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
    