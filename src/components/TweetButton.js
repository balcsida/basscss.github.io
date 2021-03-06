
import React from 'react'

const script = {
  __html: '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");'
}

const TweetButton = ({ text, url, large, ...props }) => (
  <div className='my1'
    style={{ height: 20 }}>
    <a href='https://twitter.com/share'
      className='twitter-share-button'
      data-text={text}
      data-url={url}
      data-via='basscss'>
      Tweet
    </a>
    <script dangerouslySetInnerHTML={script} />
  </div>
)

export default TweetButton
