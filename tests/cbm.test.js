import React from 'react';
import { create } from "react-test-renderer";
import CBM from "../src";


test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

describe("CBM specification tests", () => {
    it("should contain all necessary infos", () => {
        expect(CBM.info).toHaveProperty("name");
    });

    it("should render without any complications", () => {
        console.error = jest.fn();
        const mockData = "Test data";
        const cbm = create(
            <CBM.component
                data={mockData}
                onRegisterAction={() => {}}
                onRefresh={() => {}}
            />
        );

        expect(cbm).toMatchSnapshot();
    });
});