import React, { Component } from 'react'

export default class AddPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            titleInput: "",
            priceInput: 0.0,
            loading: false,
            error: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.title]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            loading: true,
            error: false
        })

        fetch("https://enigmatic-gorge-74194.herokuapp.com/post/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                title: this.state.titleInput,
                price: parseFloat(this.state.priceInput)
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.id) {
                this.props.history.push("/posts")
            }
        })
        .catch(error => {
            console.log("Error adding post ", error)

            this.setState({
                loading: false,
                error: true
            })
        })
    }

    render() {
        return (
            <div className='add-post-wrapper'>
                <h2>Add Post</h2>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="title"
                        name="titleInput" 
                        //value={this.state.titleInput}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="number" 
                        step="0.01"
                        placeholder="price"
                        name="priceInput" 
                        //value={this.state.priceInput}
                        onChange={this.handleChange}
                    />

                    <button type="submit" disabled={this.state.loading}>Add Post</button>
                </form>

                {this.state.loading ? <div className="loading">Submitting...</div> : null}

                {this.state.error ? <div className="error">An error occured... Please try again later.</div> : null}
            </div>
        )
    }
}