import React from 'react'
import Link from './Link'
import { useRouter } from 'next/router'
import { Breadcrumbs } from '@material-ui/core'

const Bread = () => {
  // path name
  const { pathname } = useRouter()
  // split path into array
  const pathArr = pathname.split('/').filter(i => i)
  // construct the link array
  const crumbs = pathArr.map((path, i) => [
    path,
    `/${pathArr.slice(0, i + 1).join('/')}/`
  ])

  return (
    <>
      <Breadcrumbs>
        {crumbs.map((crumb, i) => {
          return (
            <Link key={crumb[0]} href={crumb[1]}>
              {crumb[0]}
            </Link>
          )
        })}
      </Breadcrumbs>
    </>
  )
}

export default Bread
