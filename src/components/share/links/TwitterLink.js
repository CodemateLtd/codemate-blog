import React from 'react'
import ShareButton from './ShareButton'

const TwitterLink = ({ slug, title, styles }) => {
  const tweetLink = 'https://twitter.com/share',
    shareUrl = encodeURIComponent(`https://codemate.com${slug}`),
    shareTitle = encodeURIComponent(title),
    shareLink = `${tweetLink}?text=${title}&url=${shareUrl}`

  return <ShareButton shareLink={shareLink} media="twitter" />
}

export default TwitterLink
