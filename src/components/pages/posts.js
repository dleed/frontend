import React, { Component } from 'react'

export default class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        fetch("https://enigmatic-gorge-74194.herokuapp.com/post/get")
        .then(response => response.json())
        .then(data => {
            this.setState({
                posts: data,
                loading: false
            })
        })
        .catch(error => {
            console.log("Error getting posts ", error)
            this.setState({
                error: true,
                loading: false
            })
        })
    }

    renderPosts() {
        const postsHtml = this.state.posts.map(post => (
            <div className="post-wrapper" key={post.id}>
                <h3>{post.title}</h3>
                <p>${post.price.toFixed(2)}</p>
            </div>
        ))

        return postsHtml
    }

    render() {
        if (this.state.loading) {
            return (
                <div className='posts-page-wrapper'>
                    <h2>Posts</h2>
                    <div className='posts-wrapper'>
                        <div className="loading">Loading...</div>
                    </div>
                </div>
            )
        }

        else if (this.state.error) {
            return (
                <div className='posts-page-wrapper'>
                    <h2>Posts</h2>
                    <div className='posts-wrapper'>
                        <div className="error">An error occured... Please try again later.</div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='posts-page-wrapper'>
                    <h2>Posts</h2>
                    <div className="posts-wrapper">
                        {this.renderPosts()}
                    </div>
                </div>
            )
        }
    }
}