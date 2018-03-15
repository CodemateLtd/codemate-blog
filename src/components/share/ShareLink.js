import React from 'react'
import FontAwesome from 'react-fontawesome'
import styles from './SocialLinks.module.scss'

const ShareLink = ({ media, slug, title, newWindow = true }) => {
  let url
  const shareBlogUrl = encodeURIComponent(`https://codemate.com${slug}`)
  const shareTitle = encodeURIComponent(title)

  switch (media) {
    case 'twitter':
      const twitterLink = 'https://twitter.com/share'
      url = `${twitterLink}?text=${shareTitle}&url=${shareBlogUrl}`
      break
    case 'facebook':
      const fbLink = 'http://www.facebook.com/sharer.php'
      url = `${fbLink}?u=${shareBlogUrl}&t=${shareTitle}`
      break
    case 'linkedin':
      const linkedinLink = 'http://linkedin.com/shareArticle'
      url = `${linkedinLink}?mini=true&url=${shareBlogUrl}&title=${shareTitle}`
      break
    case 'envelope':
      const mailLink = 'mailto:'
      url = `${mailLink}?body=${shareBlogUrl}&subject=${shareTitle}`
      break
    default:
      return null
  }

  return (
    <div className={styles.linkWrapper}>
      <li className={styles[media]}>
        <a target={newWindow ? '_blank' : '_self'} href={url}>
          <FontAwesome name={media} size="1x" />
        </a>
      </li>
    </div>
  )
}

export default ShareLink
