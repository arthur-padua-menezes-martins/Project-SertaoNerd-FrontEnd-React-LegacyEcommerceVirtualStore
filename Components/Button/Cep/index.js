/*basic modules************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import React from 'react'

/*styled components************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
import { StyledContainerButtonCep, StyledArticleButtonCep } from './styles.js'

/*main function************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function ButtonCep({ placeholder = false, text = false, borderRadius = false }) {
    return (
        <StyledContainerButtonCep>

            <StyledArticleButtonCep>

                <input
                    onFocus={() => onFocus()}
                    onBlur={() => onBlur()}
                    type='text'
                    placeholder={placeholder ? placeholder : 'cep'}
                    data-placeholder={placeholder ? placeholder : 'cep'}
                    borderRadius={borderRadius}
                />

                <div
                    borderRadius={borderRadius}>

                    <button
                        borderRadius={borderRadius}>
                        {text ? text : 'calcular'}
                    </button>

                </div>

            </StyledArticleButtonCep>

        </StyledContainerButtonCep>
    )

    function onFocus() {
        var
            input = event.target,
            button = event.target.nextElementSibling

        input.placeholder = ''
        input.style.border = '0.2rem rgba(255,75,0,1) solid'
        button.style.border = '0.2rem rgba(255,75,0,1) solid'
    }
    function onBlur() {
        var
            input = event.target,
            button = event.target.nextElementSibling

        if (input.value === '') {
            input.placeholder = input.dataset.placeholder
            input.style.border = '0.2rem rgba(255,75,0,0.6) dashed'
            button.style.border = '0.2rem rgba(255,75,0,0.6) dashed'
        }
    }
}
export default ButtonCep