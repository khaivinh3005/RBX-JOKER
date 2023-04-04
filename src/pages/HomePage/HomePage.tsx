import FooterComponent from "src/components/Footer/FooterComponent";
import HeaderComponent from "src/components/Header";

interface Props {
  children?: React.ReactNode;
}
const HomePage = ({ children }: Props) => {
  return (
    <div>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default HomePage;
