// Написать функцию, создающую бейдж - объект с тремя полями firstName, lastName, fullname
// Изменение каждого из этих полей влечет изменения в связанных полях

const createBadge = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(fullName) {
            [this.firstName, this.lastName] = fullName.split(' ');
        }
    };
};

const badge = createBadge('Igor', 'Barabshov');
console.log(badge.firstName);
console.log(badge.lastName);
console.log(badge.fullName);
badge.fullName = 'newname';
console.log(badge.lastName);
console.log(badge.firstName);
console.log(badge.fullName);