import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "quill-image-uploader";

// Register module
Quill.register("modules/imageUploader", ImageUploader);

class CustomNotepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
    imageUploader: {
      upload: file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result);
          };
          reader.onerror = error => {
            reject(error);
          };
          reader.readAsDataURL(file);
        });

      }
    }
  };

  formats = [
    'header', 'font', 'list', 'bullet',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background', 'align',
    'link', 'image', 'clean'
  ];

  render() {
    return (
      <div style={{ width: '100%' }}>
        <ReactQuill
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={this.state.text}
          // onChange={(value) => this.setState({ text: value })}
          style={{ width: '100%' }}
        >
          <div className="my-editing-area" />
        </ReactQuill>
      </div>
    );
  }
}

export default CustomNotepad;
