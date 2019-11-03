import React from 'react';
import { create } from "react-test-renderer";
// Add here your CBM name
import { MyCBM as CBM, info } from "../src";


test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

describe("CBM specification tests", () => {
    it("should contain all necessary infos", () => {
        expect(info).toHaveProperty("name");
    });

    it("should render without any complications", () => {
        console.error = jest.fn();
        const mockData = "Test data";
        const cbm = create(
            <CBM
                data={mockData}
                onRegisterAction={() => {}}
                onRefresh={() => {}}
            />
        );

        expect(cbm.toTree()).toBeTruthy();
        expect(console.error).not.toBeCalled();
    });
});