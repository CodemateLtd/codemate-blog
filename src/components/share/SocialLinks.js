import React from 'react'
import styles from './SocialLinks.module.scss'
import ShareLink from './ShareLink'

const SocialLinks = ({ slug, title }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>If you like it, share it!</h3>

      <ul className={styles.shareList}>
        <ShareLink media="twitter" slug={slug} title={title} />
        <ShareLink media="facebook" slug={slug} title={title} />
        <ShareLink media="linkedin" slug={slug} title={title} />
        <ShareLink
          media="envelope"
          slug={slug}
          title={title}
          newWindow={false}
        />
      </ul>
      <br />
    </div>
  )
}

export default SocialLinks
