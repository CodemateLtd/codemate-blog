import React from 'react'
import ShareLink from './ShareLink'

const FacebookLink = ({ pageConfig }) => {
  const { host, port, slug, title } = pageConfig

  const fbLink = 'http://www.facebook.com/sharer.php',
    shareSite = encodeURIComponent(`https://${host}:${port}${slug}`),
    shareTitle = encodeURIComponent(title),
    url = `${fbLink}?u=${shareSite}&t=${shareTitle}`

  return <ShareLink url={url} media="facebook" />
}

export default FacebookLink
