import React from 'react'

const Fistlogin = () => {
    return (
        <div className="justify-center bg-white">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd30c2077d52119da0ab66962704e2e4e542dbe48fb5b95e460dcf8f5275259?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                className="grow w-full aspect-[0.67] max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-9 py-20 w-full text-3xl font-bold leading-5 bg-white text-zinc-600 max-md:px-5 max-md:max-w-full">
                <div className="self-center mt-32 text-7xl text-center text-black max-md:mt-10 max-md:text-4xl">
                  LOGIN
                </div>
                <div className="flex gap-3 px-4 py-3.5 mt-20 tracking-wide bg-white rounded-xl border-2 border-solid border-slate-950 max-md:flex-wrap max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9748a8da385e44119c22bfdf0018ad9a6e83344366b8df56784dff6ac670ce66?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                    className="shrink-0 w-11 aspect-square"
                  />
                  <div className="my-auto max-md:max-w-full">Phone number</div>
                </div>
                <div className="flex gap-3 px-4 py-4 mt-6 tracking-wide whitespace-nowrap bg-white rounded-xl border border-solid border-slate-950 border-opacity-50 max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/af0c91cbc428d9b30eee91ab3153a40b02ff1e89bbca133a92a6300d24311f39?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                    className="shrink-0 aspect-[0.97] w-[35px]"
                  />
                  <div className="my-auto max-md:max-w-full">Password</div>
                </div>
                <div className="justify-center items-center px-2.5 py-5 mt-16 text-3xl tracking-wide leading-5 text-white whitespace-nowrap rounded-xl bg-slate-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Fistlogin;