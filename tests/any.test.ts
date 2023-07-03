describe('Any', function () {
    it('should support in typescript', function () {

        const person: any = {
            id: 1,
            name: "Eko Kurniawan Khannedy",
            age: 30
        };

        person.age = 31;
        person.address = "Indonesia";

        console.info(person);

    });
});
