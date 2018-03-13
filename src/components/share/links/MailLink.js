import React from 'react'
import ShareLink from './ShareLink'

const MailLink = ({ slug, title, styles }) => {
  const mailLink = 'mailto:',
    shareSite = encodeURIComponent(`https://codemate.com${slug}`),
    shareTitle = encodeURIComponent(title),
    url = `${mailLink}?body=${shareSite}&subject=${shareTitle}`

  return (
    <ShareLink url={url} media="envelope" newWindow={false} />
  )
}

export default MailLink
