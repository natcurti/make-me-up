import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import "./styles.css";

const CarouselHome = () => {
  return (
    <Carousel fade>
      <CarouselItem>
        <div className="container-banner-01"></div>
        <CarouselCaption>
          <h2 className="text-uppercase m-0 title">Make Me Up</h2>
          <h3 className="m-0 subtitle">Sua beleza, nossa paixão!</h3>
          <p className="m-0 text">
            Descubra a magia da maquiagem e explore um universo de cores e
            possibilidades para realçar sua beleza natural e despertar a sua
            autoestima.
          </p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <div className="container-banner-02"></div>
        <CarouselCaption>
          <h2 className="text-uppercase m-0 title">Make Me Up</h2>
          <h3 className="m-0 subtitle">Expresse sua beleza única!</h3>
          <p className="m-0 text">
            Acreditamos que a beleza é única e individual, por isso oferecemos
            uma ampla variedade de produtos para atender às suas necessidades e
            preferências.
          </p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <div className="container-banner-03"></div>
        <CarouselCaption>
          <h2 className="text-uppercase m-0 title">Make Me Up</h2>
          <h3 className="m-0 subtitle">Uma experiência de beleza!</h3>
          <p className="m-0 text">
            Mais do que um simples produto de beleza, a maquiagem é uma
            ferramenta poderosa de autoexpressão e transformação. Realce seus
            pontos fortes e crie looks incríveis.
          </p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  );
};

export default CarouselHome;
