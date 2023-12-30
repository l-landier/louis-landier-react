import React from 'react';

export const ToggleModeInput = ({toggleMode, dark}) => {
    return (
        <>
            <input type="checkbox" className="d-none toggle-custom-checkbox" id="toggle-dark" defaultChecked={dark === true ? 'checked' : ''} />
            <label className="toggle-custom margin-left-xs margin-right-xs" htmlFor="toggle-dark" onClick={toggleMode}></label>
        </>
    );
};