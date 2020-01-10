import React from 'react';

function CreatePage() {
  return (
    <div>
      <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
        <div style={{ textAlign: 'center' }}>
          <Title level={2}> Editor </Title>
        </div>
        <QuillEditor
          placeholder={'Start Posting'}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        />

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
