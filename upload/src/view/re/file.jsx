import React, { Component } from 'react'

export default class componentName extends Component {
    showPreview =(e)=>{
        var file = e.target.files[0],
            fileType = file.type,
            reg = new RegExp(/jpg|jpeg|png|gif/);
        //验证是否是一张图片
        if(!reg.test(fileType.substr((fileType.lastIndexOf('/')+1)))){
            alert('不是一张图片');
            return;
        }
        //获取图片src
        if(window.FileReader){
            var fr = new FileReader(),
                portrait = this.refs.portrait
            fr.onload = function(e){
                portrait.src = e.target.result;
            }
            //将文件读取为DataURL
            fr.readAsDataURL(file);
            
            // portrait.style.display = 'block';
        }
    }       
    
    render() {
        return (
            <div>
            <input type="file" ref="file" onChange={this.showPreview} />
            <img src="" alt="" ref="portrait" />
            </div>
        )
    }
}
