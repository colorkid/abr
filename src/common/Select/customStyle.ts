type CustomStylesType = {
    isFocused: boolean;
    isSelected: boolean;
};

export const customStyles = {
    control: () => ({
        display: 'flex',
        height: ' 100%',
        width: '100%',
        padding: '0 5px 0 10px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    dropdownIndicator: () => ({
        display: 'none',
    }),
    menuList: () => ({
        borderRadius: '3px',
    }),
    option: (_: any, { isFocused, isSelected }: CustomStylesType) => ({
        backgroundColor: isSelected
            ? 'var(--main-accent)'
            : isFocused
            ? 'var(--main-accent)'
            : null,
        padding: '15px 0 15px 20px',
        cursor: 'pointer',
    }),
};
