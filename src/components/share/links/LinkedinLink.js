import React from 'react'
import ShareLink from './ShareLink'

const LinkedinLink = ({ pageConfig }) => {
  const { host, port, slug, title } = pageConfig

  const linkedinLink = 'http://linkedin.com/shareArticle',
    shareSite = encodeURIComponent(`https://${host}:${port}${slug}`),
    shareTitle = encodeURIComponent(title),
    url = `${linkedinLink}?mini=true&url=${shareSite}&title=${shareTitle}`

  return <ShareLink url={url} media="linkedin" />
}

export default LinkedinLink
