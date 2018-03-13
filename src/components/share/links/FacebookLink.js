import React from 'react'
import ShareLink from './ShareLink'

const FacebookLink = ({ slug, title, styles }) => {
  const fbLink = 'http://www.facebook.com/sharer.php',
    shareSite = encodeURIComponent(`https://codemate.com${slug}`),
    shareTitle = encodeURIComponent(title),
    url = `${fbLink}?u=${shareSite}&t=${shareTitle}`

  return <ShareLink url={url} media="facebook" />
}

export default FacebookLink
