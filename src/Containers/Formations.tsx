import React from 'react'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

import { DiCssTricks,DiCreativecommonsBadge } from 'react-icons/di'
import { GrCertificate} from 'react-icons/gr'
import { formations } from '../Constants';

const Formations = () => {
  return (
    <div className='formations-section w-full flex items-center justify-center' id='formation'>
      <div className='container relative w-full max-w-[1440px] px-4 py-8 flex flex-col justify-center items-center'>
        <div className='heading relative'>
          <h1 className='title  text-2xl font-bold lg:text-4xl'>Formations</h1>
          <h1 className=' underTitle absolute text-5xl font-bold left-1/2 text-blue-900 -top-1/2 -z-10 md:text-7xl'>5</h1>
        </div>
        <VerticalTimeline className='my-4'>
          {
            formations.map((item) => (
            <VerticalTimelineElement key={item.id}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: 'rgb(234, 179, 8)', color: '#fff' }}
              icon={<GrCertificate />}
            >
            <h3 className="vertical-timeline-element-title title text-xl font-bold">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle text-lg text-blue-700 font-medium">{item.school}</h4>
            <p className='text-lg font-light text-justify'><i>{item.desc}</i></p>
          </VerticalTimelineElement>
            ))
          }

        </VerticalTimeline>
        <div />
      </div>
    </div>
  )
}

export default Formations