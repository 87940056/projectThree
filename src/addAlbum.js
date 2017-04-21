import React, { Component } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Upload from 'antd/lib/upload';
import Icon  from 'antd/lib/icon';
import Button  from 'antd/lib/button';
const FormItem = Form.Item;
import message  from 'antd/lib/message';
//import Redirect  from 'antd/lib/redirect';


class addAlbumO extends Component {
    handleSubmit = (e) => {
        e.preventDefault();     //阻止默认的提交行为
        this.props.form.validateFields((err, values) => {
            var s='';
            for(var k in values){
                s+=k+'='+values[k]+'&';
            }
            s= s.slice(0,-1);
            if (!err) {
                //console.log('Received values of form: ', values);
                fetch('/index.php/index/z',{
                    method:'POST',
                    //ajax提交表单
                    headers:{
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    //带上cookie信息
                    credentials:'same-origin',
                    body:s
                })
                    .then(res=>res.json())
                    .then(data=> {
                        message.success('ok');
                        this.props.form.resetFields();
                    });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const style={
            labelCol: {span:3},
            wrapperCol: {span:6}
        };
        //if(this.state.re){
        //    return(
        //        <Redirect to={{pathName:'/album'}}/>
        //    )
        //}else{
        //
        //}
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="专辑名" {...style}>
                    {getFieldDecorator
                    ('name', {
                        rules: [{required: false, message: 'Please input albumName!'}]
                    })
                    (
                        < Input placeholder="请输入专辑名"/>
                    )
                    }
                </FormItem>
                <FormItem label="歌手名" {...style}>
                    {getFieldDecorator('artistName', {
                        rules: [{required: false, message: 'Please input artistName!'}]
                    })(
                        < Input placeholder="请输入歌手名"/>
                    )}
                </FormItem>

                <FormItem wrapperCol={{ span: 6, offset: 3 }}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        )
    }
}
const addAlbum = Form.create()(addAlbumO);
export default addAlbum;

//<FormItem label="上传封面" {...style}>
//    <div className="dropbox">
//        {getFieldDecorator('dragger', {
//            valuePropName: 'fileList',
//            getValueFromEvent: this.normFile,
//        })(
//            <Upload.Dragger name="files" action="/upload.do">
//                <p className="ant-upload-drag-icon">
//                    <Icon type="inbox"/>
//                </p>
//                <p className="ant-upload-text">Click or drag file to this area to upload</p>
//                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit
//                    from uploading company data or other band files</p>
//            </Upload.Dragger>
//        )}
//    </div>
//</FormItem>