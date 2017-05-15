function Kindom() {
    var allPower = [],
        sumPower = 0,
        allHelth = [],
        sumHelth = 0;

    this. ect = new Ect();
    this. orc = new Orc();
    this. grom = new Grom();

    this.warrier = [this. ect, this. orc, this. grom];

    this.warrier.forEach(
        function (item) {
            allPower.push(item.power);
            allHelth.push(item.helth);
        }
    );

    allPower.forEach(
        function (item) {
            sumPower += item;
        }
    );

    allHelth.forEach(
        function (item) {
            sumHelth += item;
        }
    );

    this.name = 'Kindom';
    this.power = sumPower;
    this.helth = sumHelth;
}

function Ect() {
    this.power = randomNumber(1,35);
    this.helth = randomNumber(1,35);
}

function Orc() {
    this.power = randomNumber(1,35);
    this.helth = randomNumber(1,35);
}

function Grom() {
    this.power = randomNumber(1,35);
    this.helth = randomNumber(1,35);
}


Kindom.prototype = Object.create(TemplateHero.prototype);
Kindom.prototype.constructor = Kindom;

