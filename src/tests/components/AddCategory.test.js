import React from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from '../../Components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change',{target: { value: value } })
        expect( wrapper.find('p').text().trim() ).toBe( value );

    })

    test('No debe de postear la información con submit', () => {

        const form = wrapper.find('form');
        form.simulate('submit',{ preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    
        const value = 'Hola mundo';

        wrapper.find('input').simulate('change',{target: { value: value } });
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        expect( wrapper.find('input').prop('value') ).toBe('');

    })

})