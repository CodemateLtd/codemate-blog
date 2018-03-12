import React from 'react'
import ShareButton from './ShareButton'

const LinkedinLink = ({ slug, title, styles }) => {
  const linkedinLink = 'http://linkedin.com/shareArticle',
    shareUrl = encodeURIComponent(`https://codemate.com${slug}`),
    shareTitle = encodeURIComponent(title),
    shareLink = `${linkedinLink}?mini=true&url=${shareUrl}&title=${shareTitle}`

  return <ShareButton shareLink={shareLink} media="linkedin" />
}

export default LinkedinLink
