import React from 'react'
import ShareButton from './ShareButton'

const FacebookLink = ({ slug, title, styles }) => {
  const fbLink = 'http://www.facebook.com/sharer.php',
    shareUrl = encodeURIComponent(`https://codemate.com${slug}`),
    shareTitle = encodeURIComponent(title),
    shareLink = `${fbLink}?u=${shareUrl}&t=${shareTitle}`

  return <ShareButton shareLink={shareLink} media="facebook" />
}

export default FacebookLink
