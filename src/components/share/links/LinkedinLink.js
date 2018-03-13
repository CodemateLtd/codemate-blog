import React from 'react'
import ShareLink from './ShareLink'

const LinkedinLink = ({ slug, title, styles }) => {
  const linkedinLink = 'http://linkedin.com/shareArticle',
    shareSite = encodeURIComponent(`https://codemate.com${slug}`),
    shareTitle = encodeURIComponent(title),
    url = `${linkedinLink}?mini=true&url=${shareSite}&title=${shareTitle}`

  return <ShareLink url={url} media="linkedin" />
}

export default LinkedinLink
