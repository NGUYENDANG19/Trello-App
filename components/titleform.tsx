import React from 'react'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

const TitleForm = () => {
  return (
    <div className="flex text-center items-center justify-center mb-6">
            <Image
              src="/trello-svgrepo-com.svg"
              alt="Logo"
              width={29}
              height={29}
            />
            <h2 className="text-[#44546f] inline fill-[#44546f] text-3xl leading-[14px] text-center font-bold">
              {siteConfig.name}
            </h2>
          </div>
  )
}

export default TitleForm
