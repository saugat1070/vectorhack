import React from 'react'

export default function Prizes() {
  return (
    <section className='w-full py-12'>
      <h2 className='text-3xl font-bold text-center mb-8 text-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)]'>Prizes and Awards</h2>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col items-center">
          <div className="min-w-100 max-w-160 md:max-w-200 md:min-w-150 rounded-[28px] border border-[#4aacd3] bg-[linear-gradient(145deg,rgba(10,14,36,0.92)_0%,rgba(22,30,64,0.92)_100%)] p-10 text-center shadow-[0_28px_90px_rgba(12,18,46,0.55)]">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-baseline gap-4 text-[clamp(3.5rem,9vw,7rem)] font-semibold leading-none">
                <span className="text-[#ff6a2b]">50K</span>
                <span className="text-[clamp(3rem,8vw,6rem)] text-[#ff6a2b]">+</span>
              </div>
              <h3 className="text-[clamp(2.5rem,7vw,5.5rem)] font-semibold uppercase tracking-[0.2em] text-[#6c7dde]">
                Prize Pool
              </h3>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7b8acb]">
                Including cash prize, merch, vouchers & swags
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
