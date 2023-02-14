import styled from "styled-components";

export const CardRow = styled.div`
  display: flex;
  /* background: red; */
`;
export const Icon = styled.div`
  background: #f4f3ff;
  min-width: 37.5px;
  height: 37.5px;
  /* border */
  padding: ${({ padding }) => padding};
  margin-top: 10px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  margin-left: 10px;
`;
export const Container = styled.div`
  max-width: 480px;
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  background: #fff;
  margin-bottom: 20px;
  margin-right:20px;
  h2 {
    font-weight: 550;
    font-size: 16px;
  }

  a,
  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #65717c;
  }
`;

export const Breaker = styled.div`
  height: 0.5px;
  width: 100%;
  background: #e1e1e1;
  margin-bottom: 10px;
`;

export const Subheader = styled.h3`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 132px;
  justify-content: space-between;
`;
export const Required = styled.span`
  color: #f3564d;
`;

export const Input = styled.input`
  border: 0.5px solid #e1e1e1;
  height: 44px;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  width: ${({ width }) => width};

  ::placeholder {
    color: #c1c1c1;
  }
`;

export const Select = styled.select.attrs((props) => ({
  width: props.width,
}))`
  border: 0.5px solid #e1e1e1;
  height: 44px;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  width: ${(props) => props.width};
  &::before {
    content: "${({ placeholder }) => placeholder}";
    color: #c1c1c1;
  }
  &::placeholder {
    color: #c1c1c1;
  }
`;

export const TextArea = styled.textarea`
  height: 104px;
  width: 448px;
  left: 0px;
  top: 36px;
  border: 0.5px solid #e1e1e1;
  border-radius: 8px;
  padding: 16px 12px;
  resize: none;
  font-family: inherit;
  font-size: 16px;
  ::placeholder {
    color: #c1c1c1;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const QuantityInput = styled(Input)`
  text-align: center;
`;
export const QuantityRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 146px;
`;
