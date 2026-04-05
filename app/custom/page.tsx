'use client'

import { useState } from 'react'
import Link from 'next/link'
import PlanDropdown from '@/components/PlanDropdown'

interface FormState {
  businessName: string
  city: string
  niche: string
  description: string
  ownerName: string
  telegram: string
  phone: string
  plan: string
}

const EMPTY: FormState = {
  businessName: '',
  city: '',
  niche: '',
  description: '',
  ownerName: '',
  telegram: '',
  phone: '',
  plan: '',
}

export default function CustomPage() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = (): Partial<FormState> => {
    const e: Partial<FormState> = {}
    if (!form.businessName.trim()) e.businessName = 'Введите название'
    if (!form.niche.trim()) e.niche = 'Укажите нишу'
    if (!form.description.trim()) e.description = 'Опишите бизнес'
    if (!form.ownerName.trim()) e.ownerName = 'Введите имя'
    if (!form.telegram.trim()) e.telegram = 'Введите Telegram'
    if (!form.phone.trim()) e.phone = 'Введите телефон'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 px-4 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</h2>
          <p className="text-gray-500 mb-6">Мы изучим ваш бизнес и свяжемся с вами в Telegram в течение дня.</p>
          <Link href="/" className="btn-primary">На главную</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-lg mx-auto">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-700 mb-10 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          На главную
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
            Расскажите о своём бизнесе
          </h1>
          <p className="text-gray-500 leading-relaxed">
            Если вашей ниши нет в списке — опишите бизнес и мы подберём решение
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Business name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Название заведения <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.businessName}
                onChange={(e) => set('businessName', e.target.value)}
                placeholder="Например: Студия йоги Баланс"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
                  errors.businessName ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Город
              </label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => set('city', e.target.value)}
                placeholder="Например: Санкт-Петербург"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>

            {/* Niche */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Ваша ниша <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.niche}
                onChange={(e) => set('niche', e.target.value)}
                placeholder="Например: Студия растяжки, Ветеринарная клиника"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
                  errors.niche ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.niche && <p className="text-red-500 text-xs mt-1">{errors.niche}</p>}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Чем занимается бизнес <span className="text-red-500">*</span>
              </label>
              <textarea
                value={form.description}
                onChange={(e) => set('description', e.target.value)}
                placeholder="Опишите что вы делаете, сколько примерно клиентов в месяц, какая главная проблема"
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none ${
                  errors.description ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
            </div>

            {/* Owner name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Имя владельца <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.ownerName}
                onChange={(e) => set('ownerName', e.target.value)}
                placeholder="Например: Алексей"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
                  errors.ownerName ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.ownerName && <p className="text-red-500 text-xs mt-1">{errors.ownerName}</p>}
            </div>

            {/* Telegram */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Telegram <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">@</span>
                <input
                  type="text"
                  value={form.telegram}
                  onChange={(e) => set('telegram', e.target.value)}
                  placeholder="username"
                  className={`w-full pl-8 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
                    errors.telegram ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
              </div>
              {errors.telegram && <p className="text-red-500 text-xs mt-1">{errors.telegram}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Телефон <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition ${
                  errors.phone ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Plan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Выбранный пакет
              </label>
              <PlanDropdown
                value={form.plan}
                onChange={(v) => set('plan', v)}
              />
              {form.plan === 'Не определился' && (
                <div className="mt-2 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-brand-50 border border-brand-200">
                  <svg className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-brand-700 leading-relaxed">
                    Не страшно — опишите ваш бизнес подробнее, и мы сами предложим подходящий тариф после первого разговора
                  </p>
                </div>
              )}
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-base mt-2">
              Отправить
            </button>

            <p className="text-xs text-gray-400 text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}
