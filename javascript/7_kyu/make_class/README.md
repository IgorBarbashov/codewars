I don't like writing classes like this:
```js
function Animal(name,species,age,health,weight,color) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
    this.weight = weight;
    this.color = color;
}
```

Give me the power to create a similar class like this:
```js
const Animal = makeClass("name","species","age","health","weight","color");
```