// Character Creation

let name = prompt("What is the name of your character?");
let gender = prompt("What gender is your character?");
let race = prompt("What race is your character? (Human, Elf, Dwarf, Halfling)")
let characterRole = prompt("What class is your character? (Warrior, Rogue, Ranger)");

const mainHero = new Hero(name, 10, gender, race, characterRole);

checkRace(mainHero, mainHero.race);
checkClass(mainHero, mainHero.characterRole);

console.log(
  `${mainHero.name} woke up in the center of some massacre. In an unknown place at unknown time. You see a lot of weapons nearby and decide to pick one.`
);

mainHero.equipNewWeapon({
  name: prompt(`Which weapon do you choose? (Sword, Dagger, Bow)`),
  minDamage: 1,
  maxDamage: 6
});

console.log(
  `As ${mainHero.name} picked up ${mainHero.equippedWeapon.name} from the ground he could saw a dying soldier nearby.
  "Come here youngling" - he said.\nTo which ${mainHero.name} replied that he doesn't talk with strangers. Mom told him to don't do that.
  "Well then..." - said dying soldier and kicked the bucket.\nWithout hesitation you walk up to him and take his armor.`
);

mainHero.equipNewArmor({
  name: `Leather clothes`,
  attackBarrierBonus: 3
});

console.log(
  `${mainHero.equippedArmor.name} are yours, even if it wasn't most honorable thing to do. ${mainHero.name} proceeds to walk forward, still without a proper goal. TOBECONTINUED--`
);

const heroParty = [mainHero];

const talrand = new Hero(`Talrand`, 10, `Male`, `Halfling`, `Rogue`,
                        {attack: 6, sneak: 2, persuade: 1},
                        {name: `Daggers`, minDamage: 2, maxDamage: 8},
                        {name: `Rags`, attackBarrierBonus: 5});

checkClass(talrand, talrand.characterRole);
checkRace(talrand, talrand.race);

heroParty.push(talrand);
