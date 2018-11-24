import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './MultiSelectAllowCreateNew.css';

const multiSelect = ({ options, selected, ...props }) => {

    return (
        <ReactMultiSelectCheckboxes
            id="mySelect"

            onInputChange={(text) => {
                if (text.length <= 2) {

                    let element = document.querySelector("#mySelect .css-ik6y5r .addNewOptionButton");
                    if (element)
                        element.classList.add('hidden');
                }
            }}

            noOptionsMessage={(msg) => {

                const text = `Create ${msg.inputValue}`;

                let element = document.querySelector("#mySelect .css-ik6y5r .addNewOptionButton");
                if (!element) {

                    let parent = document.querySelector("#mySelect .css-ik6y5r .css-11unzgr");
                    let div = document.createElement('div');
                    div.className = 'addNewOptionButton css-1gl4k7y';
                    div.innerHTML = text;
                    div.onclick = (evt) => {
                        console.log("oi");
                    }

                    parent.appendChild(div);
                }
                else {
                    if (element.classList.contains('hidden'))
                        element.classList.remove('hidden');
                    element.innerHTML = text;
                }

                return `Create ${msg.inputValue}`;
            }}

            options={[...selected, ...options]
                .filter((obj, pos, arr) => {
                    return arr.map(mapObj => mapObj.value).indexOf(obj.value) === pos;
                })}
            {...props} />
    );
}

export default multiSelect;