describe('Function', function () {
    it('should support in typescript', function () {

        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Eko")).toBe("Hello Eko");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Eko");

    });

    it('should support default value', function () {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Eko")).toBe("Hello Eko");
    });

    it('should support rest parameter', function () {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1,2,3,4,5)).toBe(15);
    });

    it('should support optional parameter', function () {
        function sayHello(firstName : string, lastName? : string): string {
            if(lastName){
                return `Hello ${firstName} ${lastName}`;
            }else{
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello("Eko")).toBe("Hello Eko");
        expect(sayHello("Eko", "Kurniawan")).toBe("Hello Eko Kurniawan");
    });
});
