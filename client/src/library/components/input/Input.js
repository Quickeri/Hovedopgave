import React from 'react';
import PropTypes from 'prop-types';
import css from './input.scss';

const Input = ({ placeholder, title, onChange, value }) => (
    <input
        className={css.input}
        placeholder={placeholder}
        title={title}
        onChange={e => onChange(e.target.value, e)}
        value={value}
    />
);

Input.propTypes = {
    placeholder: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Input;
