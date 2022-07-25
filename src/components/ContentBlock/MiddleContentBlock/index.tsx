import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../../common/Button";
import {
  ContentWrapper,
  HeadDiv,
  MiddleBlockContainer,
  ButtonWrapper,
  Heading
} from "./styles";
import { TeamMember } from "../../../common/TeamContainer";
import { Row } from "antd";

const MiddleBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Row justify="space-between" align="middle" id={id}>
    <MiddleBlockContainer>
      <Fade direction="right">
        <Heading >{t(title)}</Heading>
        <ContentWrapper>
            <HeadDiv>
                <TeamMember img="img/svg/naman.png"  name="Naman Mishra" linkedin="https://www.linkedin.com/in/naman-mishra-913009195/" twitter="https://twitter.com/ThatNaman" instagram="https://www.instagram.com/strello.co/"/>
                <TeamMember img="img/svg/aryaman.png" name="Aryaman Behera" linkedin="https://www.linkedin.com/in/aryaman-behera/" twitter="https://twitter.com/aryamanTitan" instagram="https://www.instagram.com/strello.co/"/>
                <TeamMember img="img/svg/dhruv.png" name="Dhruv Grover" linkedin="https://www.linkedin.com/in/dhruv-grover-8329481a1/" twitter="https://twitter.com/DhruvGrover1261" instagram="https://www.instagram.com/strello.co/"/>
            </HeadDiv>
        </ContentWrapper>
      </Fade>
    </MiddleBlockContainer>
    </Row>
  );
};

export default withTranslation()(MiddleBlock);
