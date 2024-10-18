import Select from 'react-select';

const ReactSelect = ({ defaultValue, options, isSearchable, isLoading, onSelectChange,
    isMulti = false, field = '', background = 'white', border = false }) => {
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: background,
            borderColor: border ? 'tint-color(#00a7ac, 40%)' : 'transparent !important'
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isSelected ? '#00a7ac' : undefined,
            };
        },
    };
    const handleChange = (selectedOption) => {
        onSelectChange(selectedOption, field);
    }
    return (
        <Select
            className="projectb-select-container"
            classNamePrefix="projectb-select"
            defaultValue={defaultValue}
            isSearchable={isSearchable}
            isLoading={isLoading}
            isMulti={isMulti}
            name="color"
            options={options}
            styles={colourStyles}
            onChange={handleChange}
        />
    )
}

export default ReactSelect;