import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from '../../components/Post/Post';
import axios from 'axios';

class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost : {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    getPostAPI()
    {   
        axios.get('http://localhost:3004/posts')
        .then((result) => {
            this.setState({
                post: result.data
            })
        })
    }

    handleRemove = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=> {
            console.log(res)
            this.getPostAPI()
        })

    }

    handleFormchange = (event) => {
        console.log('form change', event.target)
        let title = event.target.value
        this.setState({
            formBlogPost: title
        },()=>{
            console.log('value obj from BlogPost : ',this.state.formBlogPost);
        })
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        this.getPostAPI()
    }
    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name='title' placeholder='Add Title' onChange={this.handleFormchange}/>
                    <label htmlFor="body-content">Blog Content</label>
                    <textarea name="body-content" id="body-content" cols="30" rows="10" placeholder='Add Blog Content' onChange={this.handleFormchange}></textarea>
                    <button className='btn-submit'>Simpan</button>

                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;