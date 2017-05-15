function TemplateHero() {
    this.power = 0;
    this.helth = 0;
}

TemplateHero.prototype.attach = function (hostile) {

    hostile.helth = hostile.helth - 20;
    this.power = this.power - 10;

    if(hostile.helth <= 0){
        console.log('Game over! ' + hostile.name + ' - dead!')
    }
};

TemplateHero.prototype.deferd = function () {
    this.power = this.power - 20;
    this.helth = this.helth + 10;
};
