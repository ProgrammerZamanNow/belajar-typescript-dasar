import {Seller} from "../src/seller";

describe('Interface', function () {
    it('should support in typescript', function () {

        const seller: Seller = {
            id: 1,
            name: 'Toko ABC',
            nib: "12312321",
            npwp: "23123123"
        };

        seller.name = "Toko Eko";

        console.info(seller);

    });

    it('should support function interface', function () {

        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        expect(add(2,2)).toBe(4);

    });

    it('should support indexable interface', function () {

        interface StringArray {
            [index: number]: string
        }

        const names : StringArray = ["Eko", "Kurniawan", "Khannedy"];
        console.info(names);

    });

    it('should support indexable interface for non number index', function () {

        interface StringDictionary {
            [key: string] : string
        }

        const dictionary: StringDictionary = {
            "name" : "Eko",
            "address": "Indonesia"
        };

        expect(dictionary["name"]).toBe("Eko");
        expect(dictionary["address"]).toBe("Indonesia");

    });
});
