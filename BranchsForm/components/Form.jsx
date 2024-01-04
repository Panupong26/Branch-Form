import React from 'react'
import Page from './Page'

export default function Form({ page }) {
  return (
    <> 
      {page.map(e => <Page branchs={e}/>)}
    </>
  )
}
