function Enemy() {
    this.name = 'Enemy';
    this.power = randomNumber(1,100);
    this.helth = randomNumber(1,100);
}

Enemy.prototype = Object.create(TemplateHero.prototype);
Enemy.prototype.constructor = Enemy;

