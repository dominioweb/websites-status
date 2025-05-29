import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Wesites Status',
    url: 'https://wesites.dominioweb.workers.dev',
    displayDays: 10,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'www.dominioweb.com.mx',
      url: 'https://www.dominioweb.com.mx',
      description: 'You write code. They handle the rest.',
      followRedirect: false,
    },
    {
      id: 'react.dominioweb.com.mx',
      url: 'https://react.dominioweb.com.mx',
      description: 'Built for anything connected to the Internet.',
    },
  ],
  monitorsCsvUrl: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSnewwW9OuXgtuutyYSfFJ_AZdI-UpkUjP2wWi-zZWM3MKa8IzBceWCe9qB_-Lmk-S7mSFgqKVnokam/pub?gid=0&single=true&output=csv',
}
