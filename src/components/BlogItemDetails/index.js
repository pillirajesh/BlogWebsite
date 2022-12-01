// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      topic: data.topic,
      content: data.content,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, author, content, imageUrl, avatarUrl} = blogData
    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <p className="title-content">{title}</p>
            <div className="name-container">
              <img src={avatarUrl} alt={avatarUrl} className="avatar-image" />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} alt={imageUrl} className="image" />
            <p className="description">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
