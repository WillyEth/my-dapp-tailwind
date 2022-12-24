import React from 'react'

export default function CardNft() {
  return (
    <div>
      <div class="flex h-screen w-full items-center justify-center">
        {/* <!-- Card --> */}
        <article class="bg-cardBg h-[596px] w-[350px] rounded-[15px] p-6 sm:w-[327px]">
          {/* <!-- Image --> */}
          <div class="group relative cursor-pointer overflow-hidden rounded-lg">
            <img src="images/image-equilibrium.jpg" alt="glass cube" />
            <div class="bg-accent/[.5] invisible absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center group-hover:visible">
              <div>
                <img src="images/icon-view.svg" alt="eye icon" class="z-40" />
              </div>
            </div>
          </div>

          {/* <!-- Contents --> */}
          <div class="mt-6">
            <h2 class="font-600 hover:text-accent mb-4 cursor-pointer text-[22px] text-white">
              Equilibrium #3429
            </h2>
            <p class="text-softBlue font-300 mb-6">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div class="mb-6 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div>
                  <img src="images/icon-ethereum.svg" alt="icon-ethereum" />
                </div>
                <span class="text-accent text-base">0.041 ETH</span>
              </div>
              <div class="flex items-center gap-2">
                <div>
                  <img src="images/icon-clock.svg" alt="icon-clock" />
                </div>
                <span class="text-softBlue text-base">3 days left</span>
              </div>
            </div>
          </div>
          <span class="bg-line mb-4 block h-[1px]"></span>
          <div class="flex items-center gap-4">
            <div class="relative h-[33px] w-[33px] overflow-hidden rounded-full border-2 border-white">
              <img
                src="images/image-avatar.png"
                alt="profile picture of a male"
              />
            </div>
            <p class="hover:text-accent cursor-pointer text-base text-white">
              <span class="text-softBlue">Creation of </span>Jules Wyvern
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
