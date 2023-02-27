

const PhysicalActivityRatio = {
    MIN: 1.2,
    LOW: 1.375,
    MEDIUM: 1.55,
    HIGH: 1.725,
    MAX: 1.9,
};
  
const CaloriesFormulaFactor = {
    AGE: 5,
    WEIGHT: 10,
    HEIGHT: 6.25,
};

const CaloriesFormulaConstant = {
    MALE: 5,
    FEMALE: -160
};

const CaloriesMinMaxRatio = {
    MIN: 0.85,
    MAX: 1.15
};

class Counter {
    constructor(element) {
        this.root = element;
        this.form = this.root.querySelector('.counter__form')
        this.elements = this.form.elements;
        this.parameters = this.elements.parameters.elements;
        this.submit = this.elements.submit;
        this.reset = this.elements.reset;
        this.gender = this.elements.gender;
        this.age = this.elements.age;
        this.weight = this.elements.weight;
        this.height = this.elements.height;
        this.activity = this.elements.activity;

    }

    
}