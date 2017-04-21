import React, { Component } from 'react';
import Table from 'antd/lib/table';
import Popconfirm from 'antd/lib/popconfirm';
import message from 'antd/lib/message';

class Album extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    // 组件的生命周期函数
    componentDidMount() {
        //setTimeout((function(){
        //    // react中this永久性指向组件本身，而非window
        //    this.setState({
        //        loading: false,
        //        data: [{id: 1, name: 'a'},{id: 2, name: 'b'}]
        //    })
        //}).bind(this),1000);

        //var that=this;
        //fetch发送请求 fetch('/index.php/index/x').then((res)=>{console.log(res)})
        // fetch('/index/x').then(res=>res.json()).then(data=>{console.log(data)});
        fetch('/index.php/index/x')
            .then(res=>res.json())
            .then(data=> {
                this.setState({
                    data: data
                })
            });
    }

    //deleteItem(id) {
    //    fetch('/index.php/index/y', {
    //        method: 'post',
    //        header: {},
    //        body:JSON.stringify({a:1})
    //    }).then(res=>res.json())
    //        .then(data=> {
    //            this.setState({
    //                data: data
    //            })
    //        });
    //}
    deleteAlbum(id) {
        fetch(`/index.php/index/y?id=${id}`)
            .then(res=>res.text())
            .then(data=> {
                if (data=='1') {
                    this.setState({
                        data: this.state.data.filter(v=>v.id !== id)
                    });
                    message.success('删除成功');
                }else{
                    message.error('删除失败');
                }
            });
    }
    render() {
        //var lis = this.state.data.map(v=>(
        //    <li className="item" key={v.id}>{v.name}</li>
        //));
        //return (
        //    <ul className="album_list"
        //        style={this.state.loading?{justifyContent:'center'}:{justifyContent:'flex-start'}}>
        //        {this.state.loading ? <div>加载中......</div> : null}
        //        {lis.length ? lis : null}
        //    </ul>
        //);
        //return (
        //    <ul>
        //        <div className={this.state.loading?'album_list ':'album_list hide'}>加载中......</div>
        //        {lis.length ? li b                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 s : null}
        //    </ul>
        //);
        //return (
        //    <Table columns={columns} dataSource={this.state.data} pagination={{defaultPageSize:5}}></Table>
        //)
        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '专辑名',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="#">{text}</a>
            },
            {
                title: '歌手',
                dataIndex: 'artistName',
                key: 'artistName',
                //render: text => <a href={`http://www.baidu.com/s?wd=${artistName}`}>{text}</a>
                render: text => <a href={`http://www.baidu.com/s?wd=${text}`}>{text}</a>
            },
            {
                title: '操作',
                key: 'action',
                render: record => (
                    <Popconfirm
                        title="Are you sure delete this task?"
                        onConfirm={()=>this.deleteAlbum(record.id)}
                        okText="Yes"
                        cancelText="No">
                        <a href="#">删除</a>
                    </Popconfirm>
                )

            }
        ];
        return (
            <Table columns={columns} dataSource={this.state.data}/>
        )
    }
}
export default Album;