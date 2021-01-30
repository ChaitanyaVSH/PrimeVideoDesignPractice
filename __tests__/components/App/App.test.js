import React from "react";
import { shallow } from 'enzyme';
import App from "../../../src/components/App/App";

describe("VideoCard Component is rendering",()=>{
    it("should render without any errors",() => {
        const wrapper = shallow(<App/>)
        expect(wrapper.type()).toBe('div')
    });

    it("should maintain the older snapshot",() => {
        const wrapper = shallow(<App/>)
        expect(wrapper).toMatchSnapshot();
    })
});
