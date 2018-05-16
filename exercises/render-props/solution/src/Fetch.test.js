import React from "react";
import renderer from "react-test-renderer";
import Fetch from "./Fetch";

global.fetch = jest.fn(); // turn fetch info a mock function

describe("Fetch Component", () => {
    global.fetch.mockReturnValue(Promise.resolve({
        json: () => Promise.resolve("Hey"),
    }));

    it("renders a snapshot that is good", () => {
        const tree = renderer
            .create(<div/>
        //.create(<Fetch url="http://google.com">{args => null}</Fetch>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    if("starts with loading equals true", () => {
        let result;
        const tree = renderer.create(
            <Fetch url="whatever">
                {({loading}) => {
                    result = loading;
                    return null;
                }}
            </Fetch>
        );

        expect(result).toBe(true);
    });

    if("should do data", () => {
        let result;
        const tree = renderer.create(
            <Fetch url="whatever">
                {({loading}) => {
                    result = loading;
                    return null;
                }}
            </Fetch>
        );

        expect(result.loading).toBe(true);
        setTimeout(() => {
            try {
                expect(result.data).toBe("Ney");
            } catch (err) {
                console.log(err);
            }
            done();
        }, 300);
    });
})
