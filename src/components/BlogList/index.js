// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      topic: eachData.topic,
      author: eachData.author,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
    }))

    this.setState({blogsList: updatedData, isLoading: false})
    console.log(updatedData)
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul className="unordered-list-container">
            {blogsList.map(eachBlog => (
              <BlogItem eachBlogDetails={eachBlog} key={eachBlog.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
