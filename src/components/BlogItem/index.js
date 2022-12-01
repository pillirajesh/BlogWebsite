// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlogDetails} = props
  const {id, title, author, avatarUrl, imageUrl, topic} = eachBlogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <li className="list-container">
        <div className="blog-list-container">
          <img src={imageUrl} alt={imageUrl} className="image-url" />
          <div className="details-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} alt={avatarUrl} className="avatar-url" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
