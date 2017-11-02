class Base{
  constructor(name, health){
    this.name = name;
    this.maxHealth = health;
    this.currentHealth = health;
    this.isIncapacitated = false;
    this.barriers = {
      attack: 10,
      sneak: 10,
      persuade: 10
    };
    this.skills = {
      attack: 0,
      sneak: 0,
      persuade: 0
    };
  }

  attack(){
    return Math.floor(Math.Random() * 20) + 1 + this.skills.attack;
  };

  persuade(){
    return Math.floor(Math.Random() * 20) + 1 + this.skills.persuade;
  };

  sneak(){
    return Math.floor(Math.Random() * 20) + 1 + this.skills.sneak;
  };

  dealDamage(){
    return Math.floor(Math.random() * (this.equippedWeapon.maxDamage - this.equippedWeapon.minDamage +1)) + this.equippedWeapon.minDamage;
  };
};

class Hero extends Base{
  constructor(name, health, gender, race, role){
    super(name, health);
    this.gender = gender;
    this.race = race;
    this.characterRole = role;
    this.equippedWeapon = {
      name: `None`,
      minDamage: null,
      maxDamage: null
    };
    this.equippedArmor = {
      name: `None`,
      hitBarrierBonus: null
    };
  }

  levelUp(skill){
    this.maxHealth += Math.floor(Math.random() * 6) + 1;
    this.skills[skill] += 1;
  }

  equipNewWeapon(newWeapon){
    this.equippedWeapon = newWeapon;
  }

  equipNewArmor(newArmor){
    this.equippedArmor = newArmor;
  }

  rest(){
    this.currentHealth = this.maxHealth;
    this.isIncapacitated = false;
  }
};

const checkClass = (hero, characterClass) => {
  let lowerCharacterClass = characterClass.toLowerCase();

  switch (lowerCharacterClass) {
    case `warrior`:
      hero.skills.attack += 3;
      hero.skills.sneak--;
      break;

    case `rogue`:
      hero.skills.attack--;
      hero.skills.sneak += 3;
      break;

    case `ranger`:
      hero.skills.attack++;
      hero.skills.sneak++;
      hero.skills.persuade++;

    default:
      characterClass = prompt(`${characterClass} is not a valid class. Please choose one of the following : Warrior, Rogue, Ranger`);
      hero.characterRole = characterClass;
      checkClass(hero, characterClass);
      break;
  }
};

const checkRace = (hero, race) => {
  let lowerCaseRace = race.toLowerCase();

  switch (lowerCaseRace) {
    case `human`:
      break;

    case `elf`:
      hero.skills.persuade++;
      hero.barriers.persuade++;
      hero.skills.attack--;
      hero.barriers.sneak--;
      break;

    case `dwarf`:
      hero.skills.attack++;
      hero.barriers.attack++;
      hero.skills.sneak--;
      hero.barriers.persuade--;
      break;

    case `halfling`:
      hero.skills.sneak++;
      hero.barriers.sneak++;
      hero.skills.attack--;
      hero.barriers.persuade--;
      break;

    default:
      race = prompt(`${race} is not a valid race. Please choose one of the following : Human, Elf, Dwarf, Halfling`);
      hero.race = race;
      checkRace(hero, race);
      break;
  }
}
