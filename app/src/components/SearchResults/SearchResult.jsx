import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {data?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img
                  src={BASE_URL + image}
                  alt={name}
                  onLoad={() =>
                    console.log("Image loaded:", BASE_URL + image)
                  }
                  onError={() =>
                    console.log("Image failed:", BASE_URL + image)
                  }
                />
              </div>

              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .food_image {
    width: 150px;
    height: 150px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    flex: 1;

    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }

    p {
      margin-top: 4px;
      font-size: 12px;
    }

    button {
      font-size: 12px;
    }
  }
`;
