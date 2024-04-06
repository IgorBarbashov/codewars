class Marine {
    constructor(_damage, _armor) {
        this._damage = _damage;
        this._armor = _armor;
    }

    get damage() {
        return this._damage;
    }

    set damage(value) {
        this._damage = value;
    }

    get armor() {
        return this._armor;
    }

    set armor(value) {
        this._armor = value;
    }
}

class MarineWeaponUpgrade extends Marine {
    constructor(marine) {
        super(marine.damage, marine.armor);
    }

    get damage() {
        return this._damage + 1;
    }
}

class MarineArmorUpgrade extends Marine {
    constructor(marine) {
        super(marine.damage, marine.armor);
    }

    get armor() {
        return this._armor + 1;
    }
}