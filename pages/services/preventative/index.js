import React from 'react'
import Layout from '../../../components/Layout/Layout'
import Bread from '../../../components/shared/Bread'
import ServicePage from '../../../components/Services/ServicePage'
import preventative from '../../../js/services/preventative'

const index = () => {
  return <ServicePage serviceData={preventative} />
}

export default index
