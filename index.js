

function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

const elite = new Scooter(1990, "red", "Honda Elite")

console.log(
    elite
)

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}