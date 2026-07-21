'use client'

import { useState } from 'react'
import Step1Niche from './tariff-picker/Step1Niche'
import Step2Pains from './tariff-picker/Step2Pains'
import Step3Result from './tariff-picker/Step3Result'

type Step = 1 | 2 | 3

const STEPS = ['Ниша', 'Боли', 'Тариф']

export default function TariffPicker() {
  const [step, setStep] = useState<Step>(1)
  const [niche, setNiche] = useState('')
  const [pains, setPains] = useState<string[]>([])

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((label, i) => {
          const num = i + 1
          const done = step > num
          const active = step === num
          return (
            <div key={label} className="flex items-center gap-2 flex-1 last:flex-none">
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  done
                    ? 'bg-brand-500 text-white'
                    : active
                    ? 'bg-brand-500 text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {done ? (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : num}
                </div>
                <span className={`text-sm font-medium ${active ? 'text-gray-900' : 'text-gray-400'}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 rounded transition-colors ${done ? 'bg-brand-500' : 'bg-gray-100'}`} />
              )}
            </div>
          )
        })}
      </div>

      {/* Steps */}
      {step === 1 && (
        <Step1Niche
          onSelect={(n) => {
            setNiche(n)
            setStep(2)
          }}
        />
      )}
      {step === 2 && (
        <Step2Pains
          niche={niche}
          onSubmit={(p) => {
            setPains(p)
            setStep(3)
          }}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <Step3Result
          niche={niche}
          pains={pains}
          onBack={() => setStep(2)}
        />
      )}
    </div>
  )
}
