// this file is used to setup Jest and Enzyme
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });


global.IntersectionObserver = class IOMock {
    constructor( cb ) {
        this.cb = cb;
    }

    observe( element ) {
        this.observing = element;
        this.cb( [
            {
                intersectionRatio: 1,
                isIntersecting: true,
                target: this.observing
            }
        ] )
    }

    unobserve() {}
}
