class CustomSelect {
    #id;
    #options;
    #selectBtn;
    #listTech

    static #text = {
        defaultText: `Выберите элемент`
    }


    constructor(id, options = []) {
        this.#selectBtn = document.createElement('button');
        this.#listTech = document.createElement('ul');

        this.#id = id;
        this.#options = options;
    }

    #renderButton(container) {
        this.#selectBtn.className = `select-dropdown__button select-dropdown__button--${this.#id}`;
        const btnTextContainer = document.createElement('span');
        btnTextContainer.className = `select-dropdown__text select-dropdown__text--${this.#id}`
        btnTextContainer.textContent = CustomSelect.#text.defaultText;

        this.#selectBtn.addEventListener('click', this.#activeList.bind(this))

        this.#selectBtn.append(btnTextContainer);
        container.append(this.#selectBtn);

    }

    #activeList() {
        this.#listTech.classList.toggle('active')
    }

    #renderList(container) {
        this.#listTech.className = `select-dropdown__list select-dropdown__list--${this.#id}`

        this.#options.forEach((option) => {
            const itemList = document.createElement('li');
            itemList.className = `select-dropdown__list-item`;
            itemList.dataset.value = option.value;
            itemList.textContent = option.text;

            itemList.addEventListener('click', this.#activeItem.bind(this));

            this.#listTech.append(itemList)
        })

        container.append(this.#listTech)
    }

    #activeItem(event) {
        const { target } = event;
        const activeItem = target.getAttribute('data-value');
        
        const selectButtonText = this.#selectBtn.querySelector('.select-dropdown__text');

        if (selectButtonText && activeItem) {
            selectButtonText.textContent = this.#options[activeItem-1].text;

            const allLiOptions = this.#listTech.querySelectorAll(
                ".select-dropdown__list-item"
            );
            allLiOptions.forEach((liOption) => {
                liOption.classList.remove("selected");
            })

            target.classList.add('selected')
        }
        this.#listTech.classList.remove('active')
    }

    render(container) {
        const selectDropdown = document.createElement('div');
        selectDropdown.className = `select-dropdown select-dropdown--${this.#id}`;

        if (container) {
            this.#renderButton(selectDropdown);
            this.#renderList(selectDropdown);
            container.append(selectDropdown);
        }
    }
}

const options = [
    { value: 1, text: "JavaScript" },
    { value: 2, text: "NodeJS" },
    { value: 3, text: "ReactJS" },
    { value: 4, text: "HTML" },
    { value: 5, text: "CSS" }
];

const customSelect = new CustomSelect("123", options);
const mainContainer = document.querySelector("#container");
customSelect.render(mainContainer);