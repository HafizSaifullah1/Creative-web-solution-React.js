import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="py-16 bg-white">
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            {/* Image Section */}
            <div className="md:w-5/12 lg:w-5/12">
                <img
                    src="https://img.freepik.com/free-photo/solution-problem-solving-share-ideas-concept_53876-133847.jpg?t=st=1729434571~exp=1729438171~hmac=58ea4882222327842e96c209a23f5c023ed2aac8210bb3bfffdd29e0bfdae300&w=740"
                    alt="image1"
                    className="w-full"
                />
            </div>

            {/* Content Section */}
            <div className="md:w-7/12 lg:w-6/12">
                <h2 className="text-4xl font-bold sm:text-5xl">
                    Download Now
                    <span className="block sm:text-4xl mt-2">Lorem Ipsum</span>
                </h2>

                <p className="mt-6 text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem!
                </p>

                <Link
                    className="inline-flex items-center px-6 py-3 mt-6 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75"
                    to="/"
                >
                    <svg
                        fill="white"
                        width="24"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    >
                        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                    </svg>
                    &nbsp; Download now
                </Link>
            </div>
        </div>
    </div>

    <div className="grid place-items-center mt-20">
        <img className="sm:w-96 w-48" src="https://img.freepik.com/free-photo/solution-problem-solving-share-ideas-concept_53876-132643.jpg?t=st=1729434614~exp=1729438214~hmac=1624275f0ab5ff5864664150278421f9de2a8ccea1158d933bf36ebf0d17e214&w=740" alt="image2" />
    </div>

    <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
</div>

  )
}

export default Home