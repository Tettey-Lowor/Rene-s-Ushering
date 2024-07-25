import React from 'react'

export default function HeroSection() {
  return (
    <div class="h-screen flex items-center bg-green-700">

    <div class="px-4 mx-auto mt-16 mb-16 max-w-7xl sm:mt-24">
        <div class="text-center">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title">
                <span class="block">Lorem ipsum dolor  itaque?</span>
                <span class="block pt-2">Try Us</span>
            </h1>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officia at labore vero blanditiis. Laborum voluptatibus ab aliquam voluptas sint quod ad sed quos similique. Blanditiis atque amet perferendis nam.
            </p>
            <div class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">

                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a href="/Contact"
                        class="block shadow-lg w-full px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-10">
                        Making life easier
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}
