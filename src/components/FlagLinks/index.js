import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import languages from '../../locales';
import twitterEmojis from '../../ModestaCSS/scss/twemoji.module.scss';
import styles from './index.module.scss';
import Modesta from '../../data/Modesta';

export default () => (
  <div className={styles.flags}>
    {
      languages
        .filter(language => language.translations)
        .map(language => (
          <FormattedMessage id={`locales.${language.code}`} key={language.code}>
            {(message) => (
              <Link
                to={`/${language.code}`}
                className={`${Modesta.emoji} ${twitterEmojis[language.flag]} ${styles.flag}`}
                aria-label={message}
                title={message}></Link>
            )}
          </FormattedMessage>
        ))
    }
  </div>
)
