import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import {DatePicker} from 'antd';
import Button from 'antd/lib/button';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon  from 'antd/lib/icon';
const { Header, Content, Footer, Sider } = Layout;
import Table from 'antd/lib/table';
import Album from './album';
import addAlbum from './addAlbum';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//class Album extends React.Component {
//    constructor() {
//        super();
//        this.state = {
//            loading: true,
//            data: []
//        }
//    }
//
//    // 组件的生命周期函数
//    componentDidMount() {
//        //setTimeout((function(){
//        //    // react中this永久性指向组件本身，而非window
//        //    this.setState({
//        //        loading: false,
//        //        data: [{id: 1, name: 'a'},{id: 2, name: 'b'}]
//        //    })
//        //}).bind(this),1000);
//
//        //var that=this;
//        //fetch发送请求 fetch('/index.php/index/x').then((res)=>{console.log(res)})
//        // fetch('/index.php/index/x').then(res=>res.json()).then(data=>{console.log(data)})
//        fetch('/index.php/index/x')
//            .then(res=>res.json())
//            .then(data=> {
//                this.setState({
//                    loading: false,
//                    data: data
//                })
//            });
//    }
//
//    render() {
//        var lis = this.state.data.map(v=>(
//            <li className="item" key={v.id}>{v.name}</li>
//        ));
//        return (
//            <ul className="album_list"
//                style={this.state.loading?{justifyContent:'center'}:{justifyContent:'flex-start'}}>
//                {this.state.loading ? <div>加载中......</div> : null}
//                {lis.length ? lis : null}
//            </ul>
//        );
//        //return (
//        //    <ul>
//        //        <div className={this.state.loading?'album_list ':'album_list hide'}>加载中......</div>
//        //        {lis.length ? lis : null}
//        //    </ul>
//        //);
//    }
//}
//
//const columns = [{
//    title: 'Name',
//    dataIndex: 'name',
//    key: 'name',
//    render: text => <a href="#">{text}</a>
//}, {
//    title: 'Age',
//    dataIndex: 'age',
//    key: 'age'
//}, {
//    title: 'Address',
//    dataIndex: 'address',
//    key: 'address'
//}, {
//    title: 'Action',
//    key: 'action',
//    render: (text, record) => (
//        <span>
//                  <a href="#">Action 一 {record.name}</a>
//                  <span className="ant-divider"/>
//                  <a href="#">Delete</a>
//                  <span className="ant-divider"/>
//                  <a href="#" className="ant-dropdown-link">
//                      More actions <Icon type="down"/>
//                  </a>
//                </span>
//    )
//}];
//
//const data = [{
//    key: '1',
//    name: 'John Brown',
//    age: 32,
//    address: 'New York No. 1 Lake Park',
//}, {
//    key: '2',
//    name: 'Jim Green',
//    age: 42,
//    address: 'London No. 1 Lake Park',
//}, {
//    key: '3',
//    name: 'Joe Black',
//    age: 32,
//    address: 'Sidney No. 1 Lake Park',
//}];

class Welcome extends Component {
    render() {
        return (
            <h1>WELCOME</h1>
        )
    }
}
//class T extends Component {
//    render() {
//        return (
//            <Table columns={columns} dataSource={data}/>
//        )
//    }
//}

class Page extends Component {
    render() {
        return (
            <Router>
                <Layout style={{ height: '100vh' }}>
                    <Sider style={{ overflow: 'auto' }}>
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1">
                                <Link to="/album">
                                    <Icon type="user"/>
                                    <span className="nav-text">专辑列表</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/add_album">
                                    <Icon type="video-camera"/>
                                    <span className="nav-text">专辑管理</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/">
                                    <Icon type="upload"/>
                                    <span className="nav-text">nav 3</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/">
                                    <Icon type="bar-chart"/>
                                    <span className="nav-text">nav 4</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to="/">
                                    <Icon type="cloud-o"/>
                                    <span className="nav-text">nav 5</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/">
                                    <Icon type="appstore-o"/>
                                    <span className="nav-text">nav 6</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to="/">
                                    <Icon type="team"/>
                                    <span className="nav-text">nav 7</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Link to="/">
                                    <Icon type="shop"/>
                                    <span className="nav-text">nav 8</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}/>
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                                <Route exact path="/" component={Welcome}></Route>
                                <Route path="/album" component={Album}></Route>
                                <Route path="/add_album" component={addAlbum}></Route>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}


//class Form extends Component {
//    render() {
//        const columns = [{
//            title: 'Name',
//            dataIndex: 'name',
//            key: 'name',
//            render: text => <a href="#">{text}</a>,
//        }, {
//            title: 'Age',
//            dataIndex: 'age',
//            key: 'age',
//        }, {
//            title: 'Address',
//            dataIndex: 'address',
//            key: 'address',
//        }, {
//            title: 'Action',
//            key: 'action',
//            render: (text, record) => (
//                <span>
//                  <a href="#">Action 一 {record.name}</a>
//                  <span className="ant-divider"/>
//                  <a href="#">Delete</a>
//                  <span className="ant-divider"/>
//                  <a href="#" className="ant-dropdown-link">
//                      More actions <Icon type="down"/>
//                  </a>
//                </span>
//            ),
//        }];
//
//        const data = [{
//            key: '1',
//            name: 'John Brown',
//            age: 32,
//            address: 'New York No. 1 Lake Park',
//        }, {
//            key: '2',
//            name: 'Jim Green',
//            age: 42,
//            address: 'London No. 1 Lake Park',
//        }, {
//            key: '3',
//            name: 'Joe Black',
//            age: 32,
//            address: 'Sidney No. 1 Lake Park',
//        }];
//        return (
//            <Table columns={columns} dataSource={data}/>
//        )
//    }
//}

class App extends Component {
    render() {
        //return (
        //    <form action="https://www.baidu.com/s" method="get">
        //        <input type="text" name="wd"/>
        //        <Button type="primary" htmlType="submit" icon="step-forward">登录</Button>
        //    </form>
        //);
        //return (
        //    <Button type="primary" shape="" size="large" loading={()=>false}>登录</Button>
        //);
        return (
            <div>
                <Page/>
            </div>
        )
    }
}

export default App;

//const columns = [
//    {
//        title: '编号',
//        dataIndex: 'name',
//        key: 'a',
//        render: text=><a href="#">{text}</a>
//    },
//    {
//        title: '姓名',
//        dataIndex: 'name',
//        key: 'b',
//        render: text=><a href="#">{text}</a>
//    },
//    {
//        title: '操作',
//        key: 'c',
//        render: record=>(
//            <div>
//                <a href="#" onclick={()=>alert(record.id)}>删除</a>
//                <span className="ant-divider"/>
//                <a href="#">更新</a>
//            </div>
//        )
//    }
//];
//const data = [
//    {id: 1, name: "a"},
//    {id: 2, anme: "b"}
//];
//
//render() {
//    return (
//        <Table columns={columns}/>
//    )
//}