class Marine {
    constructor(_damage, _armor) {
        this.damage = _damage;
        this.armor = _armor;
    }
}

class MarineWeaponUpgrade {
    constructor(marine) {
        this.damage = marine.damage + 1;
        this.armor = marine.armor;
    }
}

class MarineArmorUpgrade {
    constructor(marine) {
        this.damage = marine.damage;
        this.armor = marine.armor + 1;
    }
}