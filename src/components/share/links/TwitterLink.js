import React from 'react'
import ShareLink from './ShareLink'

const TwitterLink = ({ slug, title, styles }) => {
  const tweetLink = 'https://twitter.com/share',
    shareSite = encodeURIComponent(`https://codemate.com${slug}`),
    shareTitle = encodeURIComponent(title),
    url = `${tweetLink}?text=${title}&url=${shareSite}`

  return <ShareLink url={url} media="twitter" />
}

export default TwitterLink
