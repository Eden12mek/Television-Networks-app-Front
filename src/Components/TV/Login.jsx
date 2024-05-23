import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-md w-full">
        <div className="md:col-span-1 mt-15 mb-50">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa9aaa6e809e7097514af160b70f98e8de00a39996e51d9ac5a2fd2d1ea891e4?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
            className="w-full aspect-[0.67]"
          />
        </div>
        <div className="md:col-span-1">
          <div className="flex flex-col items-center justify-center p-10 bg-white rounded-none shadow-md">
            <h3 className="text-3xl font-bold text-primary-text mb-10">LOGIN</h3>
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center gap-2 w-full py-2 rounded-2 border border-secondary-main">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74e79e61dfc80cbf30d2aa792ec3331460a90de1c213a54a57f5fb7fcc682b06?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                  className="w-11 h-11"
                />
                <p className="text-base">Phone number</p>
              </div>
              <div className="flex items-center gap-2 w-full py-2 rounded-2 border border-secondary-main mt-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/74b3c958cbfacf98aa6a80ce1e4c541ba3ee30548e30446e2d0815cd6856f821?apiKey=3d3ae0f91c6c4ae29c2605db8e3e2267&"
                  className="w-9 h-9"
                />
                <p className="text-base">Passwordd</p>
              </div>
              <button className="w-full py-2 mt-5 text-lg font-bold bg-primary-main text-white rounded-none">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;