import React from 'react'

const ChannelTable = () => {
    return (
        <div className="flex justify-center items-center px-16 py-16 bg-white rounded-2xl shadow-sm max-md:px-5">
          <div className="flex flex-col items-start w-full max-w-[2280px] max-md:max-w-full">
            <div className="self-stretch max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center items-start px-7 py-6 w-full text-4xl whitespace-nowrap bg-gray-200 text-black text-opacity-60 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 justify-between">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0348e7a71dcadd27cfa56bac7d3ed123f91b8592105f71f114e0e955b0a5a56d?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                        className="shrink-0 aspect-square w-[50px]"
                      />
                      <div>Search</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 justify-between self-stretch my-auto w-full text-4xl max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 justify-between my-auto text-indigo-950 max-md:flex-wrap max-md:max-w-full">
                      <div className="flex gap-5 justify-center whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6e51dc7c6f98dea16787e831b9d2b7cb3dcffdd17a3a77d2ba007116c7c576d?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                          className="shrink-0 aspect-[0.84] w-[42px]"
                        />
                        <div className="my-auto">Export</div>
                      </div>
                      <div className="flex gap-5 justify-center my-auto">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c157ebe77c5ba0d23c8b18230931628e8a5fa0e61d293471a7949af2ff5e293?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                          className="shrink-0 my-auto aspect-[1.79] w-[50px]"
                        />
                        <div>Add Filter</div>
                      </div>
                    </div>
                    <div className="justify-center px-5 py-6 text-white rounded-md bg-indigo-950">
                      Add Channel
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-32 max-w-full text-4xl whitespace-nowrap text-black text-opacity-70 w-[1097px] max-md:flex-wrap max-md:mt-10">
              <div className="flex gap-5 justify-center">
                <div>Name</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/570279a8dbb9d89c477111833ea6288b4bf5172d5bab1b1c2d78fd761eef0af0?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                  className="shrink-0 my-auto aspect-[0.66] w-[25px]"
                />
              </div>
              <div className="flex gap-5 justify-between px-20 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div>Status</div>
                <div>Action</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-40 ml-6 max-w-full w-[1090px] max-md:flex-wrap max-md:mt-10">
              <div className="my-auto text-4xl text-black">GOT</div>
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                    <div className="grow justify-center px-9 py-8 w-full rounded-2xl bg-green-800 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
                          <div className="flex gap-5 justify-center self-stretch my-auto text-4xl text-green-800 whitespace-nowrap max-md:mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83e8589f1f87f4915a64507d2244d750da597a96598cfb6dec22784200aa31c4?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                              className="shrink-0 my-auto aspect-[1.35] w-[35px]"
                            />
                            <div>Active</div>
                          </div>
                        </div>
                        <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow items-start px-14 pb-2 fill-green-800 fill-opacity-40 max-md:pl-5 max-md:mt-10">
                            <div className="shrink-0 bg-green-800 rounded-full shadow-sm h-[65px] w-[65px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
                    <div className="flex gap-5 justify-center items-center self-stretch my-auto max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c2a647718846f3cb926fce7c9bfbd47a8a81203bf24728fb0ff0b74d4cb788e?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                        className="shrink-0 self-stretch aspect-[1.45] w-[85px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dce419033e837260d4553ca6f331b80f4258a41a943127669e28b092f4fa03cc?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                        className="shrink-0 self-stretch my-auto aspect-[0.97] fill-black w-[33px]"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/108e63e330ae108ae03914d4f871ec6d6b0e1b3b00924656d790d185db51d14b?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                        className="shrink-0 self-stretch my-auto aspect-[0.77] w-[27px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default ChannelTable