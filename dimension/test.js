function Carriers(a, b, c, d, f) {
    this.a = a; this.b = b; this.c = c; this.d = d; this.f = f;

    return this.a + this.b - this.c * this.d
}

const caDoys = new Carriers(1, 2, 3, 4, 5);

console.log(caDoys.a);
console.log(caDoys.b);
console.log(caDoys.c);
console.log(caDoys.d);
console.log(caDoys.f);

console.log(caDoys);
