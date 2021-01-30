import React from "react";
import { shallow } from 'enzyme';

import VideoCard from "../../../src/components/VideoCard/VideoCard";

describe("VideoCard Component is rendering",()=>{
    it("should render without any errors",() => {
        const wrapper = shallow(<VideoCard/>)
        expect(wrapper.type()).toBe('div')
    });

    it("should maintain the older snapshot",() => {
        const wrapper = shallow(<VideoCard/>)
        expect(wrapper).toMatchSnapshot();
    })
});
