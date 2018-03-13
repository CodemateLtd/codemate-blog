import React from 'react'
import styles from './SocialLinks.module.scss'

import TwitterLink from './links/TwitterLink'
import FacebookLink from './links/FacebookLink'
import LinkedinLink from './links/LinkedinLink'
import MailLink from './links/MailLink'

const SocialLinks = ({ host, port, slug, title }) => {
  const pageConfig = { host, port, slug, title }
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>If you like it, share it!</h3>
      <ul className={styles.shareList}>
        <TwitterLink pageConfig={pageConfig} />
        <FacebookLink pageConfig={pageConfig} />
        <LinkedinLink pageConfig={pageConfig} />
        <MailLink pageConfig={pageConfig} />
      </ul>
    </div>
  )
}

export default SocialLinks
