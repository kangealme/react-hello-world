import React, {Component} from 'react';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component{
    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(()=>{
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 3000)
        
    }
   
    render(){
        return(
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YouTubeComp 
                    time='10.17' 
                    title='Gambar 1' 
                    desc ='Keterangan pertama'
                />
                <YouTubeComp 
                    time = '20.15' 
                    title='Gambar 2'
                    desc = 'keterangan kedua'
                />
                <YouTubeComp 
                    time = '12.30' 
                    title='Gambar 3'
                    desc = 'Keterangan Ketiga'
                />
                <YouTubeComp 
                    title='Gambar 4'
                    desc = 'Keterangan Keempat'
                />
                <YouTubeComp 
                    time = '07.30'
                    desc = 'Keterangan Kelima'
                /> */}
                {/* <p>Counter</p>
                <hr />
                <Product /> */}
                {/* <p>LifeCycle Component</p>
                <hr /> */}
                {/* {
                    this.state.showComponent ? 
                    <LifeCycleComp nilai={(value) => this.changeCount()}/>:null
                } */}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
    }
}

export default Home;