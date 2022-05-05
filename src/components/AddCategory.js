import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="row">
            <div class="inputg col-md-6 col-12 ">
                <input
                    className="form-control"
                    type="text"
                    value={inputValue}
                    placeholder="Buscar algo"
                    onChange={handleInputChange}
                />
                <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="submit">Buscar</button>
                </div>
            </div>
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

