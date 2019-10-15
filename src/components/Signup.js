import React, {Component} from 'react';
import { Container, ListContainer, List, ListNumber, SplitContainer, 
  Heading, DetailsContainer, Detail, Button, ButtonText, SundaeImage} from './styled-components/styled-components';

function SignUp() {
  return(
    <React.Fragment>
      <SundaeImage />
      <SplitContainer>
        <Container>
        <ListContainer>
          <List>
            <ListNumber>1</ListNumber>
          </List>
          <DetailsContainer>
            <Heading>FREE HOME ASSESSMENT</Heading>
            <Detail>Fill out the form below and we'll contact you
                within 24 hours to schedule your free, no obligation 
                home assessment. 
            </Detail>
          </DetailsContainer>
        </ListContainer>
        <ListContainer>
          <List>
            <ListNumber>2</ListNumber>
          </List>
          <DetailsContainer>
            <Heading>GET A CASH OFFER</Heading>
            <Detail>Sundae provides the highest off-market price 
                for your house as-is. We also offer $10,000 
                cash advance if you need more immediate financial 
                support prior to closing. 
            </Detail>
          </DetailsContainer>
        </ListContainer>
        <ListContainer>
          <List>
              <ListNumber>3</ListNumber>
          </List>
          <DetailsContainer>
          <Heading>CLOSE AT YOUR PACE</Heading>
          <Detail>Close as quickly as 10 days. Or take your time 
              and close up to 60 days after you accept your offer. 
              It's up to you. 
          </Detail>
          </DetailsContainer>
        </ListContainer>
        </Container>
      </SplitContainer>
      <Button>
        <ButtonText>GET OFFER</ButtonText>
      </Button>
    </React.Fragment>
  )
}

export default SignUp