import React from 'react'

function Post() {
  return (
       <div className="post">
          <div className="image">
            <img src="https://techcrunch.com/wp-content/uploads/2020/06/google-maps-ios-icon.jpg?resize=1097,617" alt="" />
          </div>
          <div className="texts">
            <h2>Google Maps will soon rename Gulf of Mexico to ‘Gulf of America’</h2>
            <p className="info">
              <a className='author'>By: John Doe</a>
              <time>2025-01.28 11:41</time>
            </p>
            <p className='summary'>Google will rename the Gulf of Mexico and Alaska’s Denali mountain in Google Maps once a federal mapping database reflects changes </p>
          </div>
        </div>
  )
}

export default Post
