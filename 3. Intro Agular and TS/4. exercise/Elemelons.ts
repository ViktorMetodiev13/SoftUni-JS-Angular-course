abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    printResult() {
        return toString();
    }
}

class Watermelon extends Melon {
    public elementIndex: number;

    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    toString() {
        return console.log(`Element: Water \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`);
    }
}

class Firemelon extends Melon {
    public elementIndex: number;

    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    toString() {
        return console.log(`Element: Fire \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`);
    }
}

class Earthmelon extends Melon {
    public elementIndex: number;

    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    toString() {
        return console.log(`Element: Earth \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`);
    }
}

class Airmelon extends Melon {
    public elementIndex: number;

    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    toString() {
        return console.log(`Element: Air \nSort: ${this.melonSort} \nElement Index: ${this.elementIndex}`);
    }
}

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
