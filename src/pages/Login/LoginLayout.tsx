/* eslint-disable prettier/prettier */
interface Props {
  children?: React.ReactNode;
}

const LoginLayout = ({ children }: Props) => {
  return (
    <div>
      LoginLayout
      {children}
    </div>
  );
};

export default LoginLayout;
