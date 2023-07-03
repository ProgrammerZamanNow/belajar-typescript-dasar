describe('Object', function () {
    it('should support in typescript', function () {

        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Eko"
        };

        console.info(person);

        person.id = "2";
        person.name = "Kurniawan";

        console.info(person);

    });
});
