const student = {
    name: "Atharva",
    age: 19,
    eng: 95,
    maths: 92,
    phy: 89,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.maths + this.phy)/3;
        console.log(`This is the average marks of ${this.name} = ${avg}`);
    }
}
