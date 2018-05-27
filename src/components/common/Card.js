import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as COLORS from '../../constants/colors'

export const Container = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${COLORS.GREY_200};
  background-color: ${COLORS.WHITE};
`
Container.displayName = 'Container'

export const Text = styled.p`
  color: ${COLORS.BLACK};
  font-size: 14px;
`
Text.displayName = 'Text'

export const Title = Text.extend`
  font-weight: bold;
`
Title.displayName = 'Title'

const Card = ({ id, title, body }) => (
  <Container>
    <Title id={`card-title-${id}`}>
      {title}
    </Title>
    <Text id={`card-body-${id}`}>
      {body}
    </Text>
  </Container>
)

Card.defaultProps = {
  title: 'Anonymous',
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
}

export default Card
