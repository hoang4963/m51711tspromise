let money = 1000;
const buyACar = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    }));
};
money = 101;
const promise = buyACar("Vinfast").then(value => {
    console.log(value);
    console.log(promise);
}, error => {
    console.log(error);
});
//# sourceMappingURL=main.js.map