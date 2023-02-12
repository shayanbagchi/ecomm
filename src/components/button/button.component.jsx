import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPE_CLASS = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>(
  {
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  }[buttonType]
);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return(
    <CustomButton {...otherProps}>{children}</CustomButton>
  );
  // console.log(buttonType)
  // switch (buttonType) {
  //   case BUTTON_TYPE_CLASS.google:
  //       return <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>
  //   case BUTTON_TYPE_CLASS.inverted:
  //       return <InvertedButton {...otherProps}>{children}</InvertedButton>
  //   default:
  //       return <BaseButton {...otherProps}>{children}</BaseButton>
  // }
};

export default Button;