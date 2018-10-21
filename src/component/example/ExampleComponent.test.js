import React from 'react';
import { shallow } from 'enzyme';
import ExampleComponent from './ExampleComponent';

describe('Example Component', function() {

    const component = shallow(<ExampleComponent />)

    it( 'should render hellow world', () => {
        expect( component.text() ).toEqual( 'Hello World!' );
    } );
});


