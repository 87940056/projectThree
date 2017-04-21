import React, {Component} from 'react';
import Table from 'antd/lib/table';
import Popconfirm from 'antd/lib/popconfirm';
class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            data: []
        }
    }
    //生命周期函数
    componentDidMount() {
        //模拟一秒后得到数据
        // setTimeout((function () {
        //     console.log(this);
        //     this.setState({//此处this指window
        //         loading: false,
        //         data: [{id: 1, name: 'aaaa'}, {id: 2, name: 'bbbb'}]
        //     })
        //
        // }).bind(this), 1000)//bind之后this指所在组件；
        var that = this;
        fetch('/index/x')
            .then(res => res.json())
            .then(data =>
                that.setState({
                    loading: false,
                    data: data
                })
            )
    }

    deleteItem(id){
        fetch(`/index/y?id=${id}`)
            .then(res=>res.json())
            .then(data=>{
                if(data){
                    console.log(data);
                    this.setState({
                        data:this.state.data.filter(v=>v.id!==id)
                    })
                }
            })
    }

    render() {
        const columns=[
            {
                title:'编号',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'名称',
                dataIndex:'name',
                key:'name',
                render:text=> <a href="">{text}</a>
            },
            {
                title:'歌手',
                dataIndex:'artist_name',
                key:'artist_name',
                render:text=> <a href={`http://www.baidu.com/s?wd=${text}`}>{text}</a>
            },
            {
                title:'操作',
                key:'action',
                render: record=>
                    <Popconfirm title="确认删除"
                                onConfirm={()=>this.deleteItem(record.id)}
                                >
                        <a href="javascript:void(0)" >删除</a>
                    </Popconfirm>
            }
        ];
        if (this.state.data) {
            var lis = this.state.data.map(v =>
                <li key={v.id}>{v.name}</li>
            )
        }
        return (
            <ul className='album'>
                {/*{this.state.loading ? <div>加载中.....</div> : null}*/}
                {/*{lis}*/}
                <Table columns={columns} dataSource={this.state.data}/>
            </ul>
        )
    }
}

export default AlbumList;