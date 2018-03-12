import React from 'react'
import FontAwesome from 'react-fontawesome'
import styles from '../SocialLinks.module.scss'

const ShareButton = ({ shareLink, media }) => {
  const shareMedia = `share${media[0].toUpperCase() + media.slice(1)}`
  
  return (
    <li className={`${styles.shareButton} ${styles[shareMedia]}`}>
      <a target="_blank" href={shareLink}>
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

export default ShareButton
