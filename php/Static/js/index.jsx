class AlbumList extends React.Component {
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
            .then(res=>res.json())
            .then(data=>
                that.setState({
                    loading:false,
                    data:data
                })
             )
    }

    render() {
        if (this.state.data) {
            var lis = this.state.data.map(v =>
                <li key={v.id}>{v.name}</li>
            )
        }
        return (
            <ul className='album'>
                {this.state.loading ? <div>加载中.....</div> : null}
                {/*{lis.length ? lis : null}*/}
                {lis}
            </ul>
        )
    }
}

class Page extends React.Component {
    render() {
        return (
            <div>
                <AlbumList/>
            </div>
        )
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);