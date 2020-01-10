import React, { useState, useEffect } from 'react';
import { Typography, Button, Form, message } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';

const { Title } = Typography;

function CreatePage() {
  const user = useSelector(state => state.user);
  const [content, setContent] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    setContent('');

    if (user.userData && !user.userData.isAuth) {
      return alert('Please Login In');
    }

    const variables = {
      content: content,
      userID: user.userData._id
    };
    axios.post('api/blog/createPost', variables).then();
  };
  return (
    <div>
      <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2}> Editor </Title>
        </div>

        {/* <QuillEditor
          placeholder={'Start Posting'}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        /> */}

        <Form onSubmit={onSubmit}>
          <div style={{ textAlign: 'center', margin: '2rem' }}>
            <Button
              size="large"
              htmlType="submit"
              className=""
              onSubmit={onSubmit}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CreatePage;
