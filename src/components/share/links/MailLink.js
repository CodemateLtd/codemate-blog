import React from 'react'
import ShareLink from './ShareLink'

const MailLink = ({ pageConfig }) => {
  const { host, port, slug, title } = pageConfig

  const mailLink = 'mailto:',
    shareSite = encodeURIComponent(`https://${host}:${port}${slug}`),
    shareTitle = encodeURIComponent(title),
    url = `${mailLink}?body=${shareSite}&subject=${shareTitle}`

  return <ShareLink url={url} media="envelope" newWindow={false} />
}

export default MailLink
