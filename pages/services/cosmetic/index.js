import React from 'react'
import Layout from '../../../components/Layout/Layout'
import Bread from '../../../components/shared/Bread'
import ServicePage from '../../../components/Services/ServicePage'
import cosmetic from '../../../js/services/cosmetic'

const index = () => {
  return <ServicePage serviceData={cosmetic} />
}

export default index
