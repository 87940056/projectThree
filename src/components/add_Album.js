import React, {Component} from 'react';

import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Upload from "antd/lib/upload";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import message from 'antd/lib/message';
const FormItem = Form.Item;
class Add_Album extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values)=> {
            var s = '';
            for (var k in values) {
                s += k + '=' + values[k] + '&';
            }
            s = s.slice(0, -1);
            if (!err) {
                fetch('/index/z', {
                    method: 'POST',
                    // ajax提交表单
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    // 带上cookie信息
                    credentials: 'same-origin',
                    body: s
                }).then(res=>res.json())
                    .then(data=> {
                        if (data) {
                            message.success('ok');
                            this.props.form.resetFields();
                        }
                    })
            }
        })
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        const style = {
            labelCol: {span: 3},
            wrapperCol: {span: 14}
        };
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...style} label="专辑名">
                        {getFieldDecorator('name',{
                            rules:[{required:true,message:'不可为空'}]
                        })(
                            <Input placeholder="请输入专辑名"/>
                        )}
                    </FormItem>
                    <FormItem {...style} label="歌手名">
                        {getFieldDecorator('artist_name',{
                            rules:[{required:true,message:'不可为空'}]
                        })(
                            <Input placeholder="请输入歌手名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}


const add_Album=Form.create()(Add_Album);
export default add_Album;