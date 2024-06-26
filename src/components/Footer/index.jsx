import Logo from '../../assets/logo.svg';
import CustomIcon from '../CustomIcon';

import * as S from './style'

export default function Footer() {

  return (
    <S.Footer>
      <S.Container>
        <S.Section>
          <S.Title>If you have any question, Let us help you!</S.Title>
          <S.Text>If you have any questions or would like to book a tour with us, please dont hesitate to contact us.</S.Text>
          <S.Text>
            <S.List>
              <li>Phone: +250 788 123 456</li>
              <li>Email: <a href="mailto:info@rwandatourism.com">info@rwandatourism.com</a></li>
              <li>Address: Kigali, Rwanda</li>
            </S.List>
          </S.Text>
        </S.Section>

        <S.Section2>
          <S.Logo src={Logo} alt="Logo Africa Wizzy" />
          <S.TextEmail>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </S.TextEmail>
          <S.Label>Subscribe to our newspaper</S.Label>
          <S.FormEmail>
            <S.Input type="email" placeholder="Input your email here" />
            <button type='submit'>
              <CustomIcon icon="send" />
            </button>
          </S.FormEmail>
        </S.Section2>
      </S.Container>

      <S.Copyright>Copyright Africa Wizzy Safari 2022</S.Copyright>
    </S.Footer>
  );
}
