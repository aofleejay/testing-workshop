import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from './common/Card'
import Layout from './common/Layout'
import * as COLORS from '../constants/colors'

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${COLORS.GREY_200};
`

const TextInput = styled.input.attrs({
  type: 'text',
  required: true,
})`
  flex: 1;
  height: 30px;
  padding: 5px;
  color: ${COLORS.BLACK};
  border: 1px solid ${COLORS.GREY_200};
  border-radius: 5px;
  font-size: 14px;
  outline: none;
`

const SubmitButton = styled.input.attrs({
  type: 'submit',
})`
  width: 100px;
  height: 30px;
  padding: 5px 15px;
  margin-left: 10px;
  border: none;
  border-radius: 100px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.GREY_300};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`

const Feed = ({ posts, inputText, onChangeText, onSubmit }) => (
  <Layout>
    <Form
      id="post-form"
      onSubmit={onSubmit}
    >
      <TextInput
        id="input-text"
        name="text"
        placeholder="What's happening?"
        value={inputText}
        maxLength={300}
        onChange={onChangeText}
      />
      <SubmitButton
        id="submit-button"
        value="Send"
      />
    </Form>
    { posts.map(({ id, title, body }) => (
      <Card
        key={id}
        id={id}
        title={title}
        body={body}
      />
    ))}
  </Layout>
)

Feed.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    body: PropTypes.string.isRequired,
  })),
  inputText: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
}

Feed.defaultProps = {
  posts: [],
  inputText: '',
  onChangeText: () => {},
  onSubmit: () => {},
}

export default Feed
