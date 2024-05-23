import React from 'react'

const Channel = () => {
    return (
        <div className="flex gap-5 justify-between items-start pt-10 pl-20 shadow-sm bg-slate-950 max-md:flex-wrap max-md:pl-5">
          <div className="text-6xl font-semibold text-white max-md:text-4xl">
            Channel
          </div>
          <div className="flex gap-5 justify-between px-10 mt-3 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7272c825c617ae589705347faecb87e596f35db5ef46b2c7c03bd15745d6ccf?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
              className="shrink-0 self-start aspect-[0.92] w-[46px]"
            />
            <div className="flex flex-col pb-12">
              <div className="shrink-0 rounded-full bg-zinc-300 h-[50px] w-[50px]" />
            </div>
          </div>
        </div>
      )
}

export default Channel