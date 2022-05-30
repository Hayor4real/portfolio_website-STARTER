import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I am <br />
          Akindele Ayorinde Emmanuel
        </SectionTitle>
        <SectionText>
          I am a Front-End Developer with demostrable skills on HTML, CSS,
          Javascript,React.JS, Node.JS,Web API,Mongo DB Boostrap and CSS
          framework. have been involved with various projects and other
          impressive technological solutions
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
