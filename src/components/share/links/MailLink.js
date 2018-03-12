import React from 'react'
import ShareButton from './ShareButton'

const MailLink = ({ slug, title, styles }) => {
  const mailLink = 'mailto:',
    shareUrl = encodeURIComponent(`https://codemate.com${slug}`),
    shareTitle = encodeURIComponent(title),
    shareLink = `${mailLink}?body=${shareUrl}&subject=${shareTitle}`

  return <ShareButton shareLink={shareLink} media="envelope" />
}

export default MailLink
