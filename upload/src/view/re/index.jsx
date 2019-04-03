import React, { Component } from 'react'
import {Upload,Message} from 'element-react'
import './style.css'
// reader = new FileReader() , image = new Image()        
//用文件加载器加载文件 reader.readAsDataURL(file);
// var fd = new FormData(document.getElementById("uploadForm"));
// fd.append("XXX"  , blob , "upload.jpg");    
//向form中加入图片数据，name属性是XXX，文件名是upload.jpg  此数据发送后台
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imageUrl: "",
        };
      }
      
      render() {
        const { imageUrl } = this.state;
        return (
          <Upload
            className="avatar-uploader"
            action="/updat"
            showFileList={false}
            onSuccess={(res, file) => this.handleAvatarScucess(res, file)}
            beforeUpload={file => this.beforeAvatarUpload(file)}
          >
            { imageUrl ? <img src={imageUrl} className="avatar" alt=""/> : <i className="el-icon-plus avatar-uploader-icon"></i> }
          </Upload>
        )
      }
      
      handleAvatarScucess(res, file) {
        this.setState({ imageUrl: URL.createObjectURL(file.raw) });
      }
      
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
      
        if (!isJPG) {
          Message('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          Message('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
}
