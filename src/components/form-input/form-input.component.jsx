import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
    return(
        <Group>
            <Input { ...otherProps }/>
            {FormInputLabel && (
                <FormInputLabel shrink = {otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
}

export default FormInput;