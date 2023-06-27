import Nav from 'User/components/Nav';
import { useRef } from 'react';
import * as Styled from './UserPage.styled';

const UserPage = () => {
  const text = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = () => {
    // 내 이메일로 전송하는 코드 입력
  };
  return (
    <Styled.Layout direction="row">
      <Nav />
      <Styled.FlexBox direction="column" alignItems="center" justifyContent="center">
        <Styled.Title color="red">버그리포트</Styled.Title>
        <Styled.CustomText>이용중에 발견하신 기능상의 오류 혹은 불편한점들</Styled.CustomText>
        <Styled.CustomText>추가적으로 필요한 기능들을 500자 이내로 입력해주세요.</Styled.CustomText>
        <Styled.CustomText>여러분의 쾌적한 이용을 위해 오류 개선에 최선을 다하겠습니다</Styled.CustomText>
        <Styled.TextArea ref={text} placeholder="500자 이내로 적어주세요" maxLength={500}></Styled.TextArea>
        <Styled.CustomButton fontColor="white" onClick={handleSubmit}>
          제출
        </Styled.CustomButton>
      </Styled.FlexBox>
    </Styled.Layout>
  );
};

export default UserPage;
