import React from 'react'
import ShareLink from './ShareLink'

const TwitterLink = ({ pageConfig }) => {
  const { host, port, slug, title } = pageConfig

  const tweetLink = 'https://twitter.com/share',
    shareSite = encodeURIComponent(`https://${host}:${port}${slug}`),
    shareTitle = encodeURIComponent(title),
    url = `${tweetLink}?text=${title}&url=${shareSite}`

  return <ShareLink url={url} media="twitter" />
}

export default TwitterLink
