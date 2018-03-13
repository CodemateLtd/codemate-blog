import React from 'react'
import FontAwesome from 'react-fontawesome'
import styles from '../SocialLinks.module.scss'

const ShareLink = ({ url, media, newWindow = true }) => {
  const shareMedia = `share${media[0].toUpperCase() + media.slice(1)}`

  return (
    <li className={`${styles.shareLink} ${styles[shareMedia]}`}>
      <a target={newWindow ? '_blank' : '_self'} href={url}>
        <FontAwesome
          className={styles.shareIcon}
          name={media}
          size="2x"
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      </a>
    </li>
  )
}

export default ShareLink
