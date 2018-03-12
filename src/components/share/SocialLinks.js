import React from 'react'
import styles from './SocialLinks.module.scss'

import TwitterLink from './links/TwitterLink'
import FacebookLink from './links/FacebookLink'
import LinkedinLink from './links/LinkedinLink'
import MailLink from './links/MailLink'

const SocialLinks = ({ slug, title }) => {
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>If you like it, share it!</h3>
      <ul className={styles.shareList}>
        <TwitterLink slug={slug} title={title} />
        <FacebookLink slug={slug} title={title} />
        <LinkedinLink slug={slug} title={title} />
        <MailLink slug={slug} title={title} />
      </ul>
    </div>
  )
}

export default SocialLinks
