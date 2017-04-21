import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

//npm install react-route-dom
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Table from 'antd/lib/table';
const {Header, Content, Footer, Sider} = Layout;

import './components/Album';
import './components/add_Album';
import AlbumList from './components/Album';
import add_Album from './components/add_Album';

class T extends Component {
    render() {
        const columns = [
            {
                id: '1',
                key: 'a',
                title: '编号',
                dataIndex: 'id',
            },
            {
                id: '2',
                key: 'b',
                title: '姓名',
                dataIndex: 'name',
            },
            {
                id: '3',
                key: 'c',
                title: '年龄',
                dataIndex: 'age',
            },
            {
                id: '4',
                key: 'd',
                title: '操作',
                dataIndex: 'action',
            }
        ];
        const data = [
            {
                id: '1',
                key: 'b',
                name: '孙勇华',
                age: 18,
            },
            {
                id: '2',
                key: 'c',
                name: '你好啊',
                age: 18,
            }
        ];
        return (
            <div>
                <Table columns={columns} dataSource={data}/>
            </div>
        )
    }
}

class Page extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Layout style={{height: '100vh'}}>
                        <Sider style={{overflow: 'auto'}}>
                            <div className="logo"/>
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    <Link to={'/s'}>
                                        <Icon type="user"/>
                                        <span className="nav-text">Welcome</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to={'/album'}>
                                        <Icon type="video-camera"/>
                                        <span className="nav-text">专辑列表</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to={'/add_album'}>
                                        <Icon type="upload"/>
                                        <span className="nav-text">添加专辑</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Icon type="bar-chart"/>
                                    <span className="nav-text">nav 4</span>
                                </Menu.Item>
                                <Menu.Item key="5">
                                    <Icon type="cloud-o"/>
                                    <span className="nav-text">nav 5</span>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <Icon type="appstore-o"/>
                                    <span className="nav-text">nav 6</span>
                                </Menu.Item>
                                <Menu.Item key="7">
                                    <Icon type="team"/>
                                    <span className="nav-text">nav 7</span>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Icon type="shop"/>
                                    <span className="nav-text">nav 8</span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{background: '#fff', padding: 0}}/>
                            <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                                <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                                    {/*<Table columns={columns} dataSource={data}/>*/}
                                    <Route exact path="/s" component={T}/>
                                    <Route path="/album" component={AlbumList}/>
                                    <Route path="/add_album" component={add_Album}/>
                                </div>
                            </Content>
                            <Footer style={{textAlign: 'center'}}>
                                Ant Design ©2016 Created by Ant UED
                            </Footer>
                        </Layout>
                    </Layout>
                </Router>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Page/>
            </div>
        );
    }
}

// npm run start
export default App;
