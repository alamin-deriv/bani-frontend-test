import "./App.css";
import DescriptionCard, {
  CustomerDetailsCard,
  PaymentCard,
  PaymentCard2,
} from "./components/DescriptionCard/DescriptionCard";
import { SecurityImgContainer, Container } from "./App.styled";
import Security from "./assets/security.png";

function App() {
  return (
    <>
      <Container className="App">
        <div>
          <DescriptionCard />
          <CustomerDetailsCard />
        </div>
        <PaymentCard />
        {/* <PaymentCard2 /> */}
      </Container>
      <SecurityImgContainer>
        <img src={Security} />
        <p>
          Do you have any questions, visit our website <a href="#">bani.africa</a>
        </p>
      </SecurityImgContainer>
    </>
  );
}

export default App;
